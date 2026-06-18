export default function HeroSection() {

  return (

    <div className="text-center mb-10">

      <div
        className="
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          bg-blue-600/20
          border
          border-blue-500/30
          text-blue-400
          text-sm
          mb-4
        "
      >
        ⚛ React Atlas v1.2
      </div>

      <h1
        className="
          text-4xl
          lg:text-5xl
          font-bold
          mb-4
        "
      >
        Visualize Your
        <span className="text-blue-500">
          {" "}React Architecture
        </span>
      </h1>

      <p
        className="
          text-slate-400
          text-lg
          max-w-3xl
          mx-auto
        "
      >
        Upload a React project and
        instantly explore components,
        dependencies, relationships,
        architecture metrics,
        and project structure.
      </p>

    </div>

  );

}