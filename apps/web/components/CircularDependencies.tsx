interface Props {
  cycles: string[][];
}

export default function CircularDependencies({
  cycles,
}: Props) {

  if (
    !cycles ||
    cycles.length === 0
  ) {
    return null;
  }

  return (

    <div className="
      bg-slate-900
      border
      border-slate-800
      rounded-xl
      p-6
      mb-6
    ">

      <h2 className="
        text-xl
        font-semibold
        mb-4
      ">
        Circular Dependencies
      </h2>

      <div className="space-y-4">

        {cycles.map(
          (cycle, index) => (

            <div
              key={index}
              className="
                rounded-lg
                border
                border-red-500/20
                bg-red-500/5
                p-4
              "
            >

              <div className="
                text-red-400
                font-medium
                mb-2
              ">
                Cycle #{index + 1}
              </div>

              <div className="
                flex
                flex-wrap
                items-center
                gap-2
              ">

                {cycle.map(
                  (
                    component,
                    componentIndex
                  ) => (
                    <div
                      key={
                        componentIndex
                      }
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          px-3
                          py-1
                          rounded
                          bg-slate-800
                          text-sm
                        "
                      >
                        {component}
                      </span>

                      {componentIndex <
                        cycle.length - 1 && (
                        <span>
                          →
                        </span>
                      )}

                    </div>
                  )
                )}

              </div>

            </div>
          )
        )}

      </div>

    </div>

  );
}