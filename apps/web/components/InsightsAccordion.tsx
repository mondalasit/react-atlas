"use client";

import { useState } from "react";

interface Props {
  insights: {
    rootComponents: string[];
    leafComponents: string[];
    deadComponents: string[];
    mostImported: {
      component: string;
      count: number;
    }[];
  };
}

export default function InsightsAccordion({
  insights,
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
          text-left
        "
      >

        <div>

          <h3
            className="
              text-lg
              font-semibold
            "
          >
            Architecture Insights
          </h3>

          <p
            className="
              text-sm
              text-slate-400
            "
          >
            Root, Leaf, Dead &
            Most Imported Components
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

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            "
          >

            <div>

              <h4
                className="
                  font-semibold
                  mb-3
                "
              >
                Root Components
              </h4>

              <ul
                className="
                  space-y-2
                  text-slate-300
                "
              >
                {insights.rootComponents.map(
                  component => (
                    <li
                      key={component}
                    >
                      {component}
                    </li>
                  )
                )}
              </ul>

            </div>

            <div>

              <h4
                className="
                  font-semibold
                  mb-3
                "
              >
                Leaf Components
              </h4>

              <ul
                className="
                  space-y-2
                  text-slate-300
                "
              >
                {insights.leafComponents.map(
                  component => (
                    <li
                      key={component}
                    >
                      {component}
                    </li>
                  )
                )}
              </ul>

            </div>

            <div>

              <h4
                className="
                  font-semibold
                  mb-3
                "
              >
                Dead Components
              </h4>

              <ul
                className="
                  space-y-2
                  text-slate-300
                "
              >
                {insights.deadComponents.map(
                  component => (
                    <li
                      key={component}
                    >
                      {component}
                    </li>
                  )
                )}
              </ul>

            </div>

            <div>

              <h4
                className="
                  font-semibold
                  mb-3
                "
              >
                Most Imported
              </h4>

              <ul
                className="
                  space-y-2
                  text-slate-300
                "
              >
                {insights.mostImported.map(
                  item => (
                    <li
                      key={
                        item.component
                      }
                    >
                      {
                        item.component
                      }
                      {" "}
                      ({item.count})
                    </li>
                  )
                )}
              </ul>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}