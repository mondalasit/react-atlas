export default function FeaturesSection() {

  return (

    <div
      className="
        grid
        md:grid-cols-3
        gap-6
        mt-12
      "
    >

      <div
        className="
          bg-slate-900
          border
          border-slate-800
          rounded-xl
          p-6
        "
      >

        <div className="text-4xl mb-4">
          ⚛
        </div>

        <h3
          className="
            font-semibold
            text-lg
            mb-2
          "
        >
          Component Intelligence
        </h3>

        <p
          className="
            text-slate-400
            text-sm
          "
        >
          Explore component
          relationships,
          imports,
          exports and hierarchy.
        </p>

      </div>

      <div
        className="
          bg-slate-900
          border
          border-slate-800
          rounded-xl
          p-6
        "
      >

        <div className="text-4xl mb-4">
          🔍
        </div>

        <h3
          className="
            font-semibold
            text-lg
            mb-2
          "
        >
          Architecture Search
        </h3>

        <p
          className="
            text-slate-400
            text-sm
          "
        >
          Quickly locate components
          and navigate large
          codebases.
        </p>

      </div>

      <div
        className="
          bg-slate-900
          border
          border-slate-800
          rounded-xl
          p-6
        "
      >

        <div className="text-4xl mb-4">
          📊
        </div>

        <h3
          className="
            font-semibold
            text-lg
            mb-2
          "
        >
          Graph Analytics
        </h3>

        <p
          className="
            text-slate-400
            text-sm
          "
        >
          Understand architecture
          metrics and dependency
          structures.
        </p>

      </div>

    </div>

  );

}