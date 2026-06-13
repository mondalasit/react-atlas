"use client";

import { useEffect, useState } from "react";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";

import ComponentDetails from "./ComponentDetails";
import SearchBar from "./SearchBar";
import GraphStats from "./GraphStats";

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

  const [
    selectedNodeId,
    setSelectedNodeId
  ] = useState<string | null>(
    null
  );

  const [
    search,
    setSearch
  ] = useState("");

  function selectComponent(
    componentName: string
  ) {


    const details =
      components.find(
        component =>
          component.name ===
          componentName
      );

    if (details) {

      setSelectedComponent(
        details
      );

      setSelectedNodeId(
        details.id
      );

    }


  }

  useEffect(() => {

    if (!search.trim()) {
      return;
    }

    const match =
      components.find(
        component =>
          component.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    if (match) {

      setSelectedComponent(
        match
      );

      setSelectedNodeId(
        match.id
      );

    }

  }, [
    search,
    components
  ]);

  const filteredNodes =
    graph.nodes.filter(
      node =>
        node.label
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  const visibleNodeIds =
    new Set(
      filteredNodes.map(
        node => node.id
      )
    );

  const nodes =
    filteredNodes.map(
      (node, index) => {

        const selected =
          selectedNodeId === node.id;

        return {

          id: node.id,

          position: {
            x:
              (index % 4) * 260,
            y:
              Math.floor(
                index / 4
              ) * 180,
          },

          data: {
            label: node.label,
          },

          style: {

            background:
              selected
                ? "#2563eb"
                : "#0f172a",

            color: "#ffffff",

            border:
              selected
                ? "2px solid #60a5fa"
                : "1px solid #334155",

            borderRadius:
              "14px",

            width: 180,

            padding: "12px",

            fontWeight: 600,

            boxShadow:
              selected
                ? "0 0 25px rgba(59,130,246,0.7)"
                : "none",

          },

        };

      }
    );


const edges =
graph.edges
.filter(
edge =>
visibleNodeIds.has(
edge.source
) &&
visibleNodeIds.has(
edge.target
)
)
.map(
edge => {

      const highlighted =
        selectedNodeId ===
          edge.source ||
        selectedNodeId ===
          edge.target;

      return {

        id:
          `${ edge.source } -${ edge.target } `,

        source:
          edge.source,

        target:
          edge.target,

        animated:
          highlighted,

        style: {

          stroke:
            highlighted
              ? "#3b82f6"
              : "#475569",

          strokeWidth:
            highlighted
              ? 3
              : 1.5,

        },

      };

    }
  );


return (

<div
  className="
    flex
    h-screen
    w-full
    bg-slate-950
    text-white
    overflow-hidden
  "
>

  {/* LEFT SIDE */}

  <div
    className="
      flex
      flex-col
      flex-1
      p-6
      gap-4
    "
  >

    {/* HEADER */}

    <div
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-5
        shadow-lg
      "
    >

      <div>

        <h1
          className="
            text-3xl
            font-bold
          "
        >
          ⚛ React Atlas
        </h1>

        <p
          className="
            text-slate-400
            text-sm
            mt-1
          "
        >
          Component Intelligence Platform
        </p>

      </div>

      <div
        className="
          bg-blue-600
          px-4
          py-2
          rounded-lg
          font-semibold
        "
      >
        v1.1
      </div>

    </div>

    {/* SEARCH */}

    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-4
      "
    >
      <SearchBar
        value={search}
        onChange={setSearch}
      />
    </div>

    {/* STATS */}

    <GraphStats
      nodeCount={
        graph.nodes.length
      }
      edgeCount={
        graph.edges.length
      }
    />

    {/* GRAPH */}

    <div
      className="
        flex-1
        rounded-2xl
        overflow-hidden
        border
        border-slate-800
        bg-slate-900
        shadow-xl
      "
    >

      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        onNodeClick={(
          _,
          node
        ) => {

          setSelectedNodeId(
            node.id
          );

          selectComponent(
            node.id
          );

        }}
      >

        <MiniMap
          zoomable
          pannable
        />

        <Controls />

        <Background
          gap={20}
          size={1}
        />

      </ReactFlow>

    </div>

  </div>

  {/* RIGHT SIDEBAR */}

  <div
    className="
      w-[420px]
      bg-slate-900
      border-l
      border-slate-800
      overflow-auto
    "
  >

    <div
      className="
        sticky
        top-0
        bg-slate-900
        border-b
        border-slate-800
        p-5
        z-10
      "
    >

      <h2
        className="
          text-lg
          font-semibold
        "
      >
        Architecture Insights
      </h2>

      <p
        className="
          text-slate-400
          text-xs
          mt-1
        "
      >
        Analyze relationships and dependencies
      </p>

    </div>

    <div className="p-4">

      <div
        className="
          bg-slate-950
          border
          border-slate-800
          rounded-2xl
          p-4
          mb-4
        "
      >

        <div className="space-y-3">

         <div className="flex justify-between">
  <span>Components</span>
  <span>{graph.nodes.length}</span>
</div>

<div className="flex justify-between">
  <span>Relationships</span>
  <span>{graph.edges.length}</span>
</div>

<div className="flex justify-between">
  <span>Selected</span>
  <span>
    {selectedComponent?.name ?? "-"}
  </span>
</div>

        </div>

      </div>

      <ComponentDetails
        component={
          selectedComponent
        }
        onNavigate={
          selectComponent
        }
      />

    </div>

  </div>

</div>

);

}
