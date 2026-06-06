"use client";

import { useState } from "react";

import GraphViewer from "./GraphViewer";

interface GraphNode {
  id: string;
  label: string;
}

interface GraphEdge {
  source: string;
  target: string;
}

interface AnalysisResult {
  graph: {
    nodes: GraphNode[];
    edges: GraphEdge[];
  };

  components?: any[];
}

export default function ProjectAnalyzer() {

  const [
    projectPath,
    setProjectPath
  ] = useState("");

  const [
    analysis,
    setAnalysis
  ] = useState<AnalysisResult | null>(
    null
  );

  const [
    loading,
    setLoading
  ] = useState(false);

  const [
    error,
    setError
  ] = useState("");

  async function analyze() {

    if (!projectPath.trim()) {

      setError(
        "Please enter a project path."
      );

      return;
    }

    setLoading(true);
    setError("");

    try {

      const response =
        await fetch(
          "http://localhost:4000/analyze",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              projectPath
            })
          }
        );

      const result =
        await response.json();

      console.log(
        "Analysis Result:",
        result
      );

      if (!response.ok) {

        throw new Error(
          result.error ||
          "Analysis failed"
        );

      }

      setAnalysis(result);

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
    <div
      style={{
        padding: "20px",
      }}
    >

      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        React Atlas v1.1
      </h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >

        <input
          type="text"
          value={projectPath}
          onChange={(e) =>
            setProjectPath(
              e.target.value
            )
          }
          placeholder="Enter React project path"
          style={{
            flex: 1,
            padding: "10px",
            border:
              "1px solid #ccc",
          }}
        />

        <button
          onClick={analyze}
          disabled={loading}
          style={{
            padding:
              "10px 20px",
            cursor:
              loading
                ? "not-allowed"
                : "pointer",
          }}
        >
          {
            loading
              ? "Analyzing..."
              : "Analyze"
          }
        </button>

      </div>

      {
        error && (
          <div
            style={{
              color: "red",
              marginBottom: "20px",
            }}
          >
            {error}
          </div>
        )
      }

      {
        analysis?.graph && (
          <GraphViewer
            graph={analysis.graph}
            components={
              analysis.components || []
            }
          />
        )
      }

    </div>
  );
}