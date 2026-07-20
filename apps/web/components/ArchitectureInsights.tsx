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

export default function ArchitectureInsights({
  insights,
}: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-6">

      <InsightCard
        title="🌳 Root Components"
        items={insights.rootComponents}
        emptyMessage="No root components"
      />

      <InsightCard
        title="🍃 Leaf Components"
        items={insights.leafComponents}
        emptyMessage="No leaf components"
      />

      <InsightCard
        title="🗑 Dead Components"
        items={insights.deadComponents}
        emptyMessage="No dead components 🎉"
      />

      <MostImportedCard
        items={insights.mostImported}
      />

    </div>
  );
}

interface InsightCardProps {
  title: string;
  items: string[];
  emptyMessage: string;
}

function InsightCard({
  title,
  items,
  emptyMessage,
}: InsightCardProps) {

  const visible = items.slice(0, 5);
  const remaining = items.length - visible.length;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 h-72 flex flex-col">

      <div className="flex justify-between items-center mb-4">

        <h3 className="text-lg font-semibold">
          {title}
        </h3>

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
              className="
                bg-slate-800
                rounded-md
                px-3
                py-2
                text-sm
              "
            >
              {item}
            </div>

          ))}

          {remaining > 0 && (

            <div className="text-blue-400 text-sm font-medium">
              + {remaining} more...
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
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 h-72 flex flex-col">

      <div className="flex justify-between items-center mb-4">

        <h3 className="text-lg font-semibold">
          ⭐ Most Imported
        </h3>

        <span className="text-blue-400 font-bold">
          {items.length}
        </span>

      </div>

      <div className="flex-1 overflow-y-auto space-y-2">

        {items.slice(0, 5).map((item, index) => (

          <div
            key={item.component}
            className="
              flex
              justify-between
              items-center
              bg-slate-800
              rounded-md
              px-3
              py-2
            "
          >

            <span>
              {index + 1}. {item.component}
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