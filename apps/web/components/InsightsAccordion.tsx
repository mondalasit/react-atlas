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
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">

      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-800/40 transition"
      >
        <div className="text-left">
          <h3 className="text-lg font-semibold">
            🏗 Architecture Insights
          </h3>

          <p className="text-sm text-slate-400 mt-1">
            Component hierarchy and dependency analysis
          </p>
        </div>

        <span className="text-2xl">
          {open ? "−" : "+"}
        </span>
      </button>

      {/* Summary */}
      <div className="border-t border-slate-800 p-5">

        <div className="grid grid-cols-2 gap-3">

          <SummaryBox
            title="Root"
            value={insights.rootComponents.length}
            icon="🌳"
          />

          <SummaryBox
            title="Leaf"
            value={insights.leafComponents.length}
            icon="🍃"
          />

          <SummaryBox
            title="Dead"
            value={insights.deadComponents.length}
            icon="🗑"
          />

          <SummaryBox
            title="Top Import"
            value={
              insights.mostImported.length
                ? insights.mostImported[0].component
                : "-"
            }
            icon="⭐"
          />

        </div>

      </div>

      {open && (

        <div className="border-t border-slate-800 p-5">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <InsightList
              title="🌳 Root Components"
              items={insights.rootComponents}
              emptyMessage="No root components"
            />

            <InsightList
              title="🍃 Leaf Components"
              items={insights.leafComponents}
              emptyMessage="No leaf components"
            />

            <InsightList
              title="🗑 Dead Components"
              items={insights.deadComponents}
              emptyMessage="No dead components 🎉"
            />

            <MostImportedCard
              items={insights.mostImported}
            />

          </div>

        </div>

      )}

    </div>
  );
}

interface SummaryBoxProps {
  title: string;
  value: string | number;
  icon: string;
}

function SummaryBox({
  title,
  value,
  icon,
}: SummaryBoxProps) {
  return (
    <div className="bg-slate-800/40 border border-slate-800 rounded-lg p-4">

      <div className="flex justify-between items-center mb-2">

        <span className="text-sm text-slate-400">
          {title}
        </span>

        <span className="text-xl">
          {icon}
        </span>

      </div>

      <div className="text-2xl font-bold">
        {value}
      </div>

    </div>
  );
}

interface InsightListProps {
  title: string;
  items: string[];
  emptyMessage: string;
}

function InsightList({
  title,
  items,
  emptyMessage,
}: InsightListProps) {

  const visible = items.slice(0, 5);

  return (

    <div className="bg-slate-800/40 border border-slate-800 rounded-lg p-4 h-72 flex flex-col">

      <div className="flex justify-between items-center mb-4">

        <h4 className="font-semibold">
          {title}
        </h4>

        <span className="text-blue-400 font-bold">
          {items.length}
        </span>

      </div>

      {items.length === 0 ? (

        <div className="text-slate-500">
          {emptyMessage}
        </div>

      ) : (

        <div className="flex-1 overflow-y-auto space-y-2">

          {visible.map(item => (

            <div
              key={item}
              className="bg-slate-900 rounded-md px-3 py-2 text-sm"
            >
              {item}
            </div>

          ))}

          {items.length > 5 && (

            <div className="text-blue-400 text-sm">
              + {items.length - 5} more...
            </div>

          )}

        </div>

      )}

    </div>

  );
}

function MostImportedCard({
  items,
}: {
  items: {
    component: string;
    count: number;
  }[];
}) {

  return (

    <div className="bg-slate-800/40 border border-slate-800 rounded-lg p-4 h-72 flex flex-col">

      <div className="flex justify-between items-center mb-4">

        <h4 className="font-semibold">
          ⭐ Most Imported
        </h4>

        <span className="text-blue-400 font-bold">
          {items.length}
        </span>

      </div>

      <div className="flex-1 overflow-y-auto space-y-2">

        {items.slice(0, 5).map((item, index) => (

          <div
            key={item.component}
            className="bg-slate-900 rounded-md px-3 py-2 flex justify-between items-center"
          >

            <span>

              {index === 0 && "🥇 "}
              {index === 1 && "🥈 "}
              {index === 2 && "🥉 "}

              {index > 2 && `${index + 1}. `}

              {item.component}

            </span>

            <span className="text-blue-400 font-semibold">
              {item.count}
            </span>

          </div>

        ))}

      </div>

    </div>

  );
}