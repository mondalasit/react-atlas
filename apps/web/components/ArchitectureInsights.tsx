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

    <div
      className="
        grid
        md:grid-cols-2
        gap-4
        mb-6
      "
    >

      <Card
        title="Root Components"
      >
        {
          insights.rootComponents
            .length
            ? insights.rootComponents
              .map(
                component => (
                  <div
                    key={component}
                  >
                    {component}
                  </div>
                )
              )
            : "None"
        }
      </Card>

      <Card
        title="Leaf Components"
      >
        {
          insights.leafComponents
            .length
            ? insights.leafComponents
              .map(
                component => (
                  <div
                    key={component}
                  >
                    {component}
                  </div>
                )
              )
            : "None"
        }
      </Card>

      <Card
        title="Dead Components"
      >
        {
          insights.deadComponents
            .length
            ? insights.deadComponents
              .map(
                component => (
                  <div
                    key={component}
                  >
                    {component}
                  </div>
                )
              )
            : "No dead components 🎉"
        }
      </Card>

      <Card
        title="Most Imported"
      >
        {
          insights.mostImported
            .slice(0, 5)
            .map(
              item => (

                <div
                  key={
                    item.component
                  }
                  className="
                    flex
                    justify-between
                  "
                >

                  <span>
                    {item.component}
                  </span>

                  <span>
                    {item.count}
                  </span>

                </div>

              )
            )
        }
      </Card>

    </div>

  );

}

function Card({
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
          text-lg
          font-semibold
          mb-4
        "
      >
        {title}
      </h3>

      <div
        className="
          text-slate-300
          space-y-2
        "
      >
        {children}
      </div>

    </div>

  );

}