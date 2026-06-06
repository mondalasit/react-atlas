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

interface AnalysisResult {
  graph: GraphData;
  components: ComponentInfo[];
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

      console.log(
        "UPLOAD RESPONSE:",
        result
      );

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
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
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
          alignItems: "center",
          marginBottom: "20px",
        }}
      >

        <input
          type="file"
          accept=".zip"
          onChange={(e) => {

            const selected =
              e.target.files?.[0];

            if (selected) {

              setFile(
                selected
              );

            }

          }}
        />

        <button
          onClick={upload}
          disabled={loading}
          style={{
            padding:
              "8px 16px",

            cursor:
              loading
                ? "not-allowed"
                : "pointer",
          }}
        >
          {
            loading
              ? "Analyzing..."
              : "Upload & Analyze"
          }
        </button>

      </div>

      {file && (

        <p>

          Selected File:

          {" "}

          <strong>
            {file.name}
          </strong>

        </p>

      )}

      {error && (

        <div
          style={{
            color: "red",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          {error}
        </div>

      )}

      {analysis && (

        <>
          <h2
            style={{
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            Architecture Graph
          </h2>

          <GraphViewer
            graph={
              analysis.graph
            }
            components={
              analysis.components
            }
          />

        </>

      )}

    </div>
  );
}