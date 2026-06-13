export interface RouteNode {
    id: string;
    route: string;
}

export interface RouteEdge {
    source: string;
    target: string;
}

export interface RouteGraph {
    nodes: RouteNode[];
    edges: RouteEdge[];
}