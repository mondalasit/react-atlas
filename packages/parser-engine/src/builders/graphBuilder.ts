import { Graph } from "../types/Graph";

export class GraphBuilder {

  public build(
    componentRelationships:
      Record<string, string[]>
  ): Graph {

    const nodeSet =
      new Set<string>();

    const edges = [];

    for (
      const [
        parent,
        children
      ] of Object.entries(
        componentRelationships
      )
    ) {

      nodeSet.add(parent);

      for (
        const child
        of children
      ) {

        nodeSet.add(child);

        edges.push({
          source: parent,
          target: child
        });
      }
    }

    const nodes =
      Array.from(nodeSet)
      .map(name => ({
        id: name,
        label: name
      }));

    return {
      nodes,
      edges
    };
  }
}