import { HealthScore }
from "./HealthScore";

export interface ArchitectureInsights {

    rootComponents:
        string[];

    leafComponents:
        string[];

    deadComponents:
        string[];

    mostImported: {
        component: string;
        count: number;
    }[];

    healthScore:
        HealthScore;

}