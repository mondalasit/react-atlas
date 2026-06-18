import GraphViewer
from "./GraphViewer";

import ExportButton
from "./ExportButton";

interface Props {

  analysis: any;

}

export default function GraphSection({
  analysis,
}: Props) {

  return (

    <div
      className="
        lg:col-span-3
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
          mb-4
        "
      >

        <h2
          className="
            text-2xl
            font-semibold
          "
        >
          Architecture Graph
        </h2>

        <ExportButton
          data={analysis}
        />

      </div>

      <div
        className="
          rounded-2xl
          overflow-hidden
          border
          border-slate-800
        "
      >

        <GraphViewer
          graph={analysis.graph}
          components={
            analysis.components
          }
        />

      </div>

    </div>

  );

}