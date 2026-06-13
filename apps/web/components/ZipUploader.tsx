"use client";

import { useState } from "react";
import GraphViewer from "./GraphViewer";
import ExportButton from "./ExportButton";
import ArchitectureInsights from "./ArchitectureInsights";
import HealthScoreCard from "./HealthScoreCard";
import CircularDependencies from "./CircularDependencies";

interface GraphNode {
  id: string;
  label: string;
}

interface GraphEdge {
  source: string;
  target: string;
}

interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

interface ComponentInfo {
  id: string;
  name: string;
  filePath: string;
  imports: string[];
  children: string[];
}

interface HealthScore {

  score: number;

  status:
  | "Excellent"
  | "Good"
  | "Warning"
  | "Critical";

  reasons: string[];

}

interface ArchitectureInsightsData {

  rootComponents: string[];

  leafComponents: string[];

  deadComponents: string[];

  mostImported: {
    component: string;
    count: number;
  }[];

  healthScore:
  HealthScore;

}

interface RouteNode {

  id: string;

  label: string;

}

interface RouteEdge {

  source: string;

  target: string;

}

interface RouteGraph {

  nodes: RouteNode[];

  edges: RouteEdge[];

}
interface AnalysisResult {

  graph: GraphData;

  components:
  ComponentInfo[];

  routes:
  any[];

  routeGraph:
  RouteGraph;

  insights:
  ArchitectureInsightsData;

  circularDependencies:
  string[][];

}
export default function ZipUploader() {

  const [file, setFile] =
    useState<File | null>(null);

  const [analysis, setAnalysis] =
    useState<AnalysisResult | null>(
      null
    );

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function upload() {

    if (!file) {

      setError(
        "Please select a ZIP file."
      );

      return;

    }

    setLoading(true);
    setError("");

    try {

      const formData =
        new FormData();

      formData.append(
        "project",
        file
      );

      const response =
        await fetch(
          "http://localhost:4000/upload",
          {
            method: "POST",
            body: formData,
          }
        );

      const result =
        await response.json();

      console.log(result.insights);

      if (!response.ok) {

        throw new Error(
          result.error ||
          "Upload failed"
        );

      }

      if (
        result.graph &&
        result.components
      ) {

        setAnalysis({

          graph:
            result.graph,

          components:
            result.components,

          routes:
            result.routes ?? [],

          routeGraph:
            result.routeGraph ?? {
              nodes: [],
              edges: [],
            },

          insights:
            result.insights ?? {
              rootComponents: [],
              leafComponents: [],
              deadComponents: [],
              mostImported: [],
            },

          circularDependencies:
            result.circularDependencies ?? [],

        });

      } else {

        throw new Error(
          "Invalid analysis data received"
        );

      }

    } catch (err) {

      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Unknown error"
      );

    } finally {

      setLoading(false);

    }

  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
      absolute
      top-0
      left-0
      w-[500px]
      h-[500px]
      bg-blue-600/10
      blur-[150px]
    "
        />

        <div
          className="
      absolute
      bottom-0
      right-0
      w-[500px]
      h-[500px]
      bg-purple-600/10
      blur-[150px]
    "
        />

      </div>

      <nav className="flex items-center justify-between mb-16">

        <div className="flex items-center gap-3">

          <div
            className="
        w-10
        h-10
        rounded-xl
        bg-blue-600
        flex
        items-center
        justify-center
        font-bold
      "
          >
            ⚛
          </div>

          <div>

            <div className="font-bold text-lg">
              React Atlas
            </div>

            <div className="text-xs text-slate-500">
              Architecture Intelligence
            </div>

          </div>

        </div>

        <div className="flex gap-6 text-sm text-slate-400">

          <button className="hover:text-white">
            Features
          </button>

          <button className="hover:text-white">
            Docs
          </button>

          <button className="hover:text-white">
            GitHub
          </button>

        </div>

      </nav>

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="text-center mb-10">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm mb-4">
            ⚛ React Atlas v1.1
          </div>

          <h1 className="text-6xl font-bold mb-4">
            Visualize Your
            <span className="text-blue-500"> React Architecture</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Upload a React project and instantly explore components,
            dependencies, relationships, architecture metrics,
            and project structure.
          </p>

        </div>

        {/* UPLOAD CARD */}
        <div className="max-w-3xl mx-auto">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">

            <h2 className="text-2xl font-semibold mb-6">
              Upload Project
            </h2>

            <div className="flex flex-col md:flex-row gap-4">

              <input
                type="file"
                accept=".zip"
                className="
                flex-1
                rounded-lg
                border
                border-slate-700
                bg-slate-950
                px-4
                py-3
                text-sm
              "
                onChange={(e) => {
                  const selected =
                    e.target.files?.[0];

                  if (selected) {
                    setFile(selected);
                  }
                }}
              />

              <button
                onClick={upload}
                disabled={loading}
                className="
                px-8
                py-3
                rounded-lg
                bg-blue-600
                hover:bg-blue-700
                transition
                font-semibold
                disabled:opacity-50
              "
              >
                {loading ? (
                  <div className="flex items-center gap-2">

                    <div
                      className="
        h-4
        w-4
        rounded-full
        border-2
        border-white
        border-t-transparent
        animate-spin
      "
                    />

                    Analyzing Architecture...

                  </div>
                ) : (
                  "Upload & Analyze"
                )}
              </button>

            </div>

            {file && (
              <div className="mt-5 text-slate-300">
                📦 Selected:
                <span className="font-semibold ml-2">
                  {file.name}
                </span>
              </div>
            )}

            {error && (
              <div className="mt-5 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                {error}
              </div>
            )}

          </div>

        </div>

        {/* FEATURES */}
        {!analysis && (

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="text-4xl mb-4">
                ⚛
              </div>

              <h3 className="font-semibold text-lg mb-2">
                Component Intelligence
              </h3>

              <p className="text-slate-400 text-sm">
                Explore component relationships,
                imports, exports and hierarchy.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="text-4xl mb-4">
                🔍
              </div>

              <h3 className="font-semibold text-lg mb-2">
                Architecture Search
              </h3>

              <p className="text-slate-400 text-sm">
                Quickly locate components and
                navigate large codebases.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="text-4xl mb-4">
                📊
              </div>

              <h3 className="font-semibold text-lg mb-2">
                Graph Analytics
              </h3>

              <p className="text-slate-400 text-sm">
                Understand architecture metrics
                and dependency structures.
              </p>
            </div>

          </div>

        )}

        {analysis && (

          <div className="mt-10">

            <HealthScoreCard
              score={
                analysis.insights
                  .healthScore
                  .score
              }
              status={
                analysis.insights
                  .healthScore
                  .status
              }
            />

            <ArchitectureInsights
              insights={
                analysis.insights
              }
            />
            <CircularDependencies
              cycles={
                analysis.circularDependencies
              }
            />
            <div className="flex items-center justify-between mb-4">

              <h2 className="text-2xl font-semibold">
                Architecture Graph
              </h2>

              <ExportButton
                data={analysis}
              />

            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-800">
              <GraphViewer
                graph={analysis.graph}
                components={analysis.components}
              />
            </div>

          </div>

        )}

      </div>
      <footer
        className="
    mt-24
    pt-10
    border-t
    border-slate-800
    text-center
    text-slate-500
  "
      >

        React Atlas v1.1

        <div className="mt-2 text-sm">
          Visualize • Explore • Understand
        </div>

      </footer>
    </div>
  );
}