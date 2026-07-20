interface RouteInfo {
  path: string;
}

interface Props {
  routes: RouteInfo[];
}

interface CardProps {
  title: string;
  value: number;
}

function Card({
  title,
  value,
}: CardProps) {

  return (

    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        p-4
      "
    >

      <div
        className="
          text-slate-400
          text-xs
          uppercase
        "
      >
        {title}
      </div>

      <div
        className="
          text-3xl
          font-bold
          mt-2
        "
      >
        {value}
      </div>

    </div>

  );

}

export default function RouteSummaryCards({
  routes,
}: Props) {

  const totalRoutes =
    routes.length;

  const dynamicRoutes =
    routes.filter(
      route =>
        route.path.includes("[")
    ).length;

  const staticRoutes =
    totalRoutes -
    dynamicRoutes;

  return (

    <div
      className="
        grid
        grid-cols-3
        gap-4
      "
    >

      <Card
        title="Routes"
        value={totalRoutes}
      />

      <Card
        title="Static"
        value={staticRoutes}
      />

      <Card
        title="Dynamic"
        value={dynamicRoutes}
      />

    </div>

  );

}