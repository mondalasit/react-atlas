interface Props {
  components: number;
  relationships: number;
  healthScore: number;
  cycles: number;
}

interface CardProps {
  label: string;
  value: number;
}

function Card({
  label,
  value,
}: CardProps) {

  return (

    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        p-4
      "
    >

      <div
        className="
          text-slate-400
          text-xs
          uppercase
          tracking-wide
        "
      >
        {label}
      </div>

      <div
        className="
          text-3xl
          font-bold
          mt-2
        "
      >
        {value}
      </div>

    </div>

  );

}

export default function SummaryCards({
  components,
  relationships,
  healthScore,
  cycles,
}: Props) {

  return (

    <div
      className="
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-4
        mb-6
      "
    >

      <Card
        label="Components"
        value={components}
      />

      <Card
        label="Relations"
        value={relationships}
      />

      <Card
        label="Health Score"
        value={healthScore}
      />

      <Card
        label="Cycles"
        value={cycles}
      />

    </div>

  );

}