export interface GraphEdge {
  source: string;
  target: string;
}

function buildAdjacencyList(
  edges: GraphEdge[]
): Record<string, string[]> {

  const graph:
    Record<string, string[]> = {};

  for (const edge of edges) {

    if (!graph[edge.source]) {
      graph[edge.source] = [];
    }

    graph[edge.source].push(
      edge.target
    );
  }

  return graph;
}

function normalizeCycle(
  cycle: string[]
): string {

  const nodes =
    cycle.slice(0, -1);

  const smallest =
    [...nodes].sort()[0];

  const start =
    nodes.indexOf(
      smallest
    );

  const rotated = [

    ...nodes.slice(start),

    ...nodes.slice(
      0,
      start
    )

  ];

  return rotated.join("->");
}

export class CircularDependencyAnalyzer {

  public analyze(
    edges: GraphEdge[]
  ): string[][] {

    const graph =
      buildAdjacencyList(
        edges
      );

    const visited =
      new Set<string>();

    const stack =
      new Set<string>();

    const cycles:
      string[][] = [];

    const dfs = (
      node: string,
      path: string[]
    ) => {

      if (
        stack.has(node)
      ) {

        const index =
          path.indexOf(
            node
          );

        if (
          index !== -1
        ) {

          cycles.push(
            path.slice(
              index
            )
          );

        }

        return;
      }

      if (
        visited.has(node)
      ) {
        return;
      }

      visited.add(node);

      stack.add(node);

      const neighbors =
        graph[node] || [];

      for (
        const neighbor
        of neighbors
      ) {

        dfs(
          neighbor,
          [
            ...path,
            neighbor
          ]
        );

      }

      stack.delete(
        node
      );
    };

    Object.keys(
      graph
    ).forEach(
      node =>
        dfs(
          node,
          [node]
        )
    );

    const seen =
      new Set<string>();

    return cycles.filter(
      cycle => {

        const key =
          normalizeCycle(
            cycle
          );

        if (
          seen.has(key)
        ) {
          return false;
        }

        seen.add(key);

        return true;
      }
    );
  }
}