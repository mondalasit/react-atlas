interface Props {
  totalComponents: number;
  totalRelationships: number;
  rootComponents: number;
  leafComponents: number;
  deadComponents: number;
  circularDependencies: number;
  healthScore: number;
}

interface SummaryCardProps {
  title: string;
  value: number;
}

function SummaryCard({
  title,
  value,
}: SummaryCardProps) {
  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        p-5
      "
    >
      <div className="text-slate-400 text-sm mb-2">
        {title}
      </div>

      <div className="text-3xl font-bold text-white">
        {value}
      </div>
    </div>
  );
}

export default function ProjectSummaryDashboard({
  totalComponents,
  totalRelationships,
  rootComponents,
  leafComponents,
  deadComponents,
  circularDependencies,
  healthScore,
}: Props) {
  return (
    <div className="mb-8">

      <h2
        className="
          text-2xl
          font-semibold
          mb-4
        "
      >
        Project Summary
      </h2>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-4
        "
      >

        <SummaryCard
          title="Components"
          value={totalComponents}
        />

        <SummaryCard
          title="Relationships"
          value={totalRelationships}
        />

        <SummaryCard
          title="Root Components"
          value={rootComponents}
        />

        <SummaryCard
          title="Leaf Components"
          value={leafComponents}
        />

        <SummaryCard
          title="Dead Components"
          value={deadComponents}
        />

        <SummaryCard
          title="Circular Dependencies"
          value={circularDependencies}
        />

        <SummaryCard
          title="Health Score"
          value={healthScore}
        />

      </div>

    </div>
  );
}