import GraphViewer from "../components/GraphViewer";

import { getGraph } from "../services/graphService";

export default async function Home() {

  const graph =
    await getGraph();

  return (
    <GraphViewer
      graph={graph}
    />
  );
}