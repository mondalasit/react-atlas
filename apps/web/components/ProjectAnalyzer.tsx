"use client";

import { useState } from "react";
import GraphViewer from "./GraphViewer";

export default function ProjectAnalyzer() {

  const [projectPath, setProjectPath] =
    useState("");

  const [graph, setGraph] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  async function analyze() {

    if (!projectPath.trim()) {
      return;
    }

    setLoading(true);

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

      setGraph(result);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  }

  return (
    <div
      className="p-4"
    >
      <div
        className="flex gap-2 mb-4"
      >
        <input
          type="text"
          value={projectPath}
          onChange={e =>
            setProjectPath(
              e.target.value
            )
          }
          placeholder="Enter React project path"
          className="
            border
            p-2
            flex-1
          "
        />

        <button
          onClick={analyze}
          className="
            border
            px-4
          "
        >
          {
            loading
              ? "Analyzing..."
              : "Analyze"
          }
        </button>
      </div>

      {
        graph &&
        (
          <GraphViewer
            graph={graph}
          />
        )
      }
    </div>
  );
}