interface Props {
  component: any;

  onNavigate?: (
    componentName: string
  ) => void;
}

export default function ComponentDetails({
  component,
  onNavigate,
}: Props) {

  if (!component) {

    return (
      <div className="p-6">

        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-6
          "
        >

          <h2
            className="
              text-xl
              font-semibold
              text-white
              mb-3
            "
          >
            Component Intelligence
          </h2>

          <p className="text-slate-400">
            Select a component node
            to inspect architecture
            details.
          </p>

        </div>

      </div>
    );

  }

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}

      <div
        className="
          bg-slate-900
          border
          border-slate-800
          rounded-2xl
          p-5
        "
      >

        <div
          className="
            text-xs
            uppercase
            text-slate-500
            mb-2
          "
        >
          Component
        </div>

        <h2
          className="
            text-2xl
            font-bold
            text-white
          "
        >
          {component.name}
        </h2>

      </div>

      {/* FILE */}

      <div
        className="
          bg-slate-900
          border
          border-slate-800
          rounded-2xl
          p-5
        "
      >

        <h3
          className="
            text-sm
            uppercase
            text-slate-500
            mb-3
          "
        >
          File Path
        </h3>

        <p
          className="
            text-sm
            text-slate-300
            break-all
          "
        >
          {component.filePath}
        </p>

      </div>

      {/* STATS */}

      <div
        className="
          grid
          grid-cols-2
          gap-4
        "
      >

        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            p-4
          "
        >
          <div className="text-slate-500 text-xs">
            Imports
          </div>

          <div
            className="
              text-2xl
              font-bold
            "
          >
            {component.imports?.length || 0}
          </div>
        </div>

        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            p-4
          "
        >
          <div className="text-slate-500 text-xs">
            Children
          </div>

          <div
            className="
              text-2xl
              font-bold
            "
          >
            {component.children?.length || 0}
          </div>
        </div>

      </div>

      {/* IMPORTS */}

      <SectionCard
        title="Imports"
      >
        {
          component.imports?.length
            ? (
              component.imports.map(
                (
                  item: string
                ) => (
                  <NavButton
                    key={item}
                    label={item}
                    onClick={() =>
                      onNavigate?.(
                        item
                      )
                    }
                  />
                )
              )
            )
            : (
              <EmptyState />
            )
        }
      </SectionCard>

      {/* CHILDREN */}

      <SectionCard
        title="Children"
      >
        {
          component.children?.length
            ? (
              component.children.map(
                (
                  item: string
                ) => (
                  <NavButton
                    key={item}
                    label={item}
                    onClick={() =>
                      onNavigate?.(
                        item
                      )
                    }
                  />
                )
              )
            )
            : (
              <EmptyState />
            )
        }
      </SectionCard>

    </div>
  );
}

function SectionCard({
  title,
  children,
}: any) {

  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-5
      "
    >
      <h3
        className="
          text-sm
          uppercase
          text-slate-500
          mb-4
        "
      >
        {title}
      </h3>

      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}

function NavButton({
  label,
  onClick,
}: any) {

  return (
    <button
      onClick={onClick}
      className="
        w-full
        text-left
        p-3
        rounded-lg
        bg-slate-800
        hover:bg-blue-600
        transition
      "
    >
      {label}
    </button>
  );
}

function EmptyState() {

  return (
    <div className="text-slate-500">
      Nothing found
    </div>
  );
}