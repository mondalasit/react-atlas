export interface RouteNode {
  id: string;
  label: string;
}

export interface RouteEdge {
  source: string;
  target: string;
}

export interface RouteGraph {
  nodes: RouteNode[];
  edges: RouteEdge[];
}