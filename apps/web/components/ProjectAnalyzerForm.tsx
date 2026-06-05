"use client";

import { useState } from "react";

export default function
ProjectAnalyzerForm() {

  const [path, setPath] =
    useState("");

  async function analyze() {

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
            projectPath: path
          })
        }
      );

    const graph =
      await response.json();

    console.log(graph);
  }

  return (
    <>
      <input
        value={path}
        onChange={e =>
          setPath(
            e.target.value
          )
        }
      />

      <button
        onClick={analyze}
      >
        Analyze
      </button>
    </>
  );
}