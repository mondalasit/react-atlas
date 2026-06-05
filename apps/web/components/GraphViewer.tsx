"use client";

import ReactFlow, {
Background,
Controls
} from "reactflow";

import "reactflow/dist/style.css";

interface GraphNode {
id: string;
label: string;
}

interface GraphEdge {
source: string;
target: string;
}

interface Props {
graph: {
nodes: GraphNode[];
edges: GraphEdge[];
};
}

export default function GraphViewer({
graph
}: Props) {

const nodes =
graph.nodes.map(
(node, index) => ({
id: node.id,

    position: {
      x: index * 250,
      y: 100
    },

    data: {
      label: node.label
    }
  })
);

const edges =
graph.edges.map(
edge => ({
id:
`${edge.source}-${edge.target}`,

    source:
      edge.source,

    target:
      edge.target
  })
);

return (
<div
style={{
width: "100%",
height: "100vh"
}}
> <ReactFlow
     nodes={nodes}
     edges={edges}
     fitView
   > <Background /> <Controls /> </ReactFlow> </div>
);
}
