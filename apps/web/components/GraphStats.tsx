interface Props {
  nodeCount: number;
  edgeCount: number;
}

export default function GraphStats({
  nodeCount,
  edgeCount,
}: Props) {

  const healthScore =
    Math.max(
      70,
      100 -
      Math.floor(
        edgeCount / 10
      )
    );

  return (
    <div
      className="
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-4
        mb-4
      "
    >

      <MetricCard
        title="Components"
        value={nodeCount}
        icon="⚛"
      />

      <MetricCard
        title="Relations"
        value={edgeCount}
        icon="🔗"
      />

      <MetricCard
        title="Health"
        value={`${healthScore}%`}
        icon="📊"
      />

      <MetricCard
        title="Status"
        value="Healthy"
        icon="✅"
      />

    </div>
  );
}

function MetricCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: string;
}) {

  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-4
        shadow-lg
        hover:border-blue-500
        transition-all
      "
    >

      <div
        className="
          flex
          justify-between
          items-center
          mb-3
        "
      >
        <span className="text-2xl">
          {icon}
        </span>

        <span
          className="
            text-xs
            uppercase
            text-slate-500
          "
        >
          {title}
        </span>
      </div>

      <div
        className="
          text-3xl
          font-bold
          text-white
        "
      >
        {value}
      </div>

    </div>
  );
}