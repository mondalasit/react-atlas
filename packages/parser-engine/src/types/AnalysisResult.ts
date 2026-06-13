import { Graph } from "./Graph";
import { ComponentDetails } from "./ComponentDetails";
import { RouteInfo } from "./RouteInfo";
import { RouteGraph } from "./RouteGraph";
import { ArchitectureInsights } from "./ArchitectureInsights";

export interface AnalysisResult {

    graph: Graph;

    components:
        ComponentDetails[];

    routes:
        RouteInfo[];

    routeGraph:
        RouteGraph;

    insights:
        ArchitectureInsights;

    circularDependencies:
        string[][];

}