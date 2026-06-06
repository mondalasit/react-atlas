import { RouteInfo }
from "../types/RouteInfo";

import { RouteGraph }
from "../types/RouteGraph";

export class RouteGraphBuilder {

  public build(
    routes: RouteInfo[]
  ): RouteGraph {

    return {

      nodes:
        routes.map(
          route => ({
            id: route.path,
            label: route.path
          })
        ),

      edges: []

    };
  }
}