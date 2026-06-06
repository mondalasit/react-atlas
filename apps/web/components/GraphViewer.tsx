"use client";

import { useState } from "react";

import ReactFlow, {
  Background,
  Controls,
} from "reactflow";

import ComponentDetails from "./ComponentDetails";

import "reactflow/dist/style.css";

interface GraphNode {
  id: string;
  label: string;
}

interface GraphEdge {
  source: string;
  target: string;
}

interface ComponentInfo {
  id: string;
  name: string;
  filePath: string;
  imports: string[];
  children: string[];
}

interface Props {
  graph: {
    nodes: GraphNode[];
    edges: GraphEdge[];
  };

  components: ComponentInfo[];
}

export default function GraphViewer({
  graph,
  components,
}: Props) {

  const [
    selectedComponent,
    setSelectedComponent
  ] = useState<ComponentInfo | null>(
    null
  );

  const nodes =
    graph.nodes.map(
      (node, index) => ({

        id: node.id,

        position: {
          x: (index % 4) * 250,
          y:
            Math.floor(
              index / 4
            ) * 150,
        },

        data: {
          label: node.label,
        },

        type: "default",

      })
    );

  const edges =
    graph.edges.map(
      (edge) => ({

        id:
          `${edge.source}-${edge.target}`,

        source:
          edge.source,

        target:
          edge.target,

      })
    );

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "800px",
        border: "1px solid #ccc",
      }}
    >

      <div
        style={{
          flex: 3,
        }}
      >

        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView

          onNodeClick={(
            _,
            node
          ) => {

            const details =
              components.find(
                component =>
                  component.name ===
                  node.id
              );

            if (details) {

              setSelectedComponent(
                details
              );

            }

          }}
        >

          <Background />

          <Controls />

        </ReactFlow>

      </div>

      <div
        style={{
          flex: 1,
          minWidth: "350px",
          background:
            "#fafafa",
          borderLeft:
            "1px solid #ddd",
          overflow: "auto",
        }}
      >

        <ComponentDetails
          component={
            selectedComponent
          }
        />

      </div>

    </div>
  );
}