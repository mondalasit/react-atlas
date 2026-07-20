"use client";

import { useState } from "react";
import RouteSummaryCards from "./RouteSummaryCards";

interface RouteInfo {
  path: string;
  filePath: string;
  type?: string;
}

interface Props {
  routes: RouteInfo[];
}

export default function RouteDiscoveryAccordion({
  routes,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-center justify-between"
      >
        <div>
          <h3 className="text-lg font-semibold">
            Route Discovery
          </h3>

          <p className="text-sm text-slate-400">
            {routes.length} route(s) detected
          </p>
        </div>

        <span className="text-2xl">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="border-t border-slate-800 p-6">

          {/* Route Statistics */}
          <RouteSummaryCards routes={routes} />

          <div className="h-6" />

          {routes.length === 0 ? (
            <div className="text-slate-400">
              No routes detected
            </div>
          ) : (
            <div className="space-y-3">
              {routes.map((route, index) => (
                <div
                  key={index}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-4"
                >
                  <div className="text-blue-400 font-medium">
                    {route.path}
                  </div>

                  <div className="mt-1 text-sm text-slate-400">
                    {route.filePath}
                  </div>

                  {route.type && (
                    <div className="mt-2">
                      <span className="inline-flex rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-300">
                        {route.type}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}