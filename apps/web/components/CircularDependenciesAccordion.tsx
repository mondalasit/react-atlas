"use client";

import { useState } from "react";

interface Props {
  cycles: string[][];
}

export default function CircularDependenciesAccordion({
  cycles,
}: Props) {

  const [open, setOpen] =
    useState(false);

  return (

    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        overflow-hidden
      "
    >

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          w-full
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >

        <div>

          <h3
            className="
              text-lg
              font-semibold
            "
          >
            Circular Dependencies
          </h3>

          <p
            className="
              text-sm
              text-slate-400
            "
          >
            {cycles.length}
            {" "}
            cycle(s) detected
          </p>

        </div>

        <span
          className="
            text-2xl
          "
        >
          {open ? "−" : "+"}
        </span>

      </button>

      {open && (

        <div
          className="
            border-t
            border-slate-800
            p-6
          "
        >

          {cycles.length === 0 ? (

            <div
              className="
                text-green-400
              "
            >
              ✓ No circular
              dependencies
              detected
            </div>

          ) : (

            <div
              className="
                space-y-4
              "
            >

              {cycles.map(
                (
                  cycle,
                  index
                ) => (

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

                    <div
                      className="
                        text-red-400
                        font-medium
                        mb-3
                      "
                    >
                      Cycle #
                      {index + 1}
                    </div>

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-2
                        items-center
                      "
                    >

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
                              "
                            >
                              {
                                component
                              }
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

          )}

        </div>

      )}

    </div>

  );

}