interface Props {

  score: number;

  status: string;

}

export default function HealthScoreCard({
  score,
  status,
}: Props) {

  return (

    <div
      className="
        mb-6
        rounded-3xl
        bg-slate-900
        border
        border-slate-800
        p-8
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        <div>

          <div
            className="
              text-slate-400
              text-sm
            "
          >
            Architecture Health
          </div>

          <div
            className="
              text-6xl
              font-bold
              mt-2
            "
          >
            {score}
          </div>

        </div>

        <div
          className="
            px-5
            py-3
            rounded-full
            bg-green-500/20
            text-green-400
            font-semibold
          "
        >
          {status}
        </div>

      </div>

    </div>

  );

}