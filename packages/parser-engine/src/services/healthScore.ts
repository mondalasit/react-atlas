import { Graph }
from "../types/Graph";

import { ArchitectureInsights }
from "../types/ArchitectureInsights";

import { HealthScore }
from "../types/HealthScore";

export class HealthScoreBuilder {

    build(
    graph: Graph,
    insights: {

        rootComponents: string[];

        leafComponents: string[];

        deadComponents: string[];

        mostImported: {

            component: string;

            count: number;

        }[];

    }
): HealthScore {

        let score = 100;

        const reasons: string[] = [];

        /*
         * Dead Components
         */

        const deadCount =
            insights.deadComponents
                .length;

        if (
            deadCount > 0
        ) {

            score -=
                deadCount * 3;

            reasons.push(
                `${deadCount} dead components found`
            );

        }

        /*
         * Too many roots
         */

        const rootCount =
            insights.rootComponents
                .length;

        if (
            rootCount > 5
        ) {

            score -= 10;

            reasons.push(
                "Too many entry points"
            );

        }

        /*
         * Large dependency graph
         */

        if (
            graph.edges.length >
            graph.nodes.length * 4
        ) {

            score -= 15;

            reasons.push(
                "High dependency density"
            );

        }

        score =
            Math.max(
                score,
                0
            );

        let status:
            HealthScore["status"];

        if (
            score >= 90
        ) {

            status =
                "Excellent";

        } else if (
            score >= 75
        ) {

            status =
                "Good";

        } else if (
            score >= 50
        ) {

            status =
                "Warning";

        } else {

            status =
                "Critical";

        }

        return {

            score,

            status,

            reasons,

        };

    }

}