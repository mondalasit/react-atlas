import { Graph } from "../types/Graph";
import { ArchitectureInsights }
from "../types/ArchitectureInsights";

export class ArchitectureInsightsBuilder {

    build(
        graph: Graph
    ): ArchitectureInsights {

        const incoming =
            new Map<string, number>();

        const outgoing =
            new Map<string, number>();

        for (
            const node
            of graph.nodes
        ) {

            incoming.set(
                node.id,
                0
            );

            outgoing.set(
                node.id,
                0
            );

        }

        for (
            const edge
            of graph.edges
        ) {

            incoming.set(
                edge.target,
                (
                    incoming.get(
                        edge.target
                    ) || 0
                ) + 1
            );

            outgoing.set(
                edge.source,
                (
                    outgoing.get(
                        edge.source
                    ) || 0
                ) + 1
            );

        }

        const rootComponents =
            graph.nodes
                .filter(
                    node =>
                        (
                            incoming.get(
                                node.id
                            ) || 0
                        ) === 0
                )
                .map(
                    node =>
                        node.id
                );

        const leafComponents =
            graph.nodes
                .filter(
                    node =>
                        (
                            outgoing.get(
                                node.id
                            ) || 0
                        ) === 0
                )
                .map(
                    node =>
                        node.id
                );

        const mostImported =
            Array
                .from(
                    incoming.entries()
                )
                .sort(
                    (
                        a,
                        b
                    ) =>
                        b[1] - a[1]
                )
                .slice(
                    0,
                    10
                )
                .map(
                    (
                        [
                            component,
                            count
                        ]
                    ) => ({

                        component,

                        count,

                    })
                );

        const deadComponents =
            graph.nodes
                .filter(
                    node =>
                        (
                            incoming.get(
                                node.id
                            ) || 0
                        ) === 0 &&
                        (
                            outgoing.get(
                                node.id
                            ) || 0
                        ) === 0
                )
                .map(
                    node =>
                        node.id
                );

        return {

            rootComponents,

            leafComponents,

            deadComponents,

            mostImported,

        };

    }

}