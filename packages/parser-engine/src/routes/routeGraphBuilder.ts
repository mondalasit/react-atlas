import { RouteInfo } from "../types/RouteInfo";
import {
    RouteGraph,
    RouteNode,
    RouteEdge,
} from "../types/RouteGraph";

export class RouteGraphBuilder {

    build(
        routes: RouteInfo[]
    ): RouteGraph {

        const nodes: RouteNode[] = [];
        const edges: RouteEdge[] = [];

        const nodeMap =
            new Map<
                string,
                RouteNode
            >();

        for (
            const routeInfo
            of routes
        ) {

            const node: RouteNode = {

                id:
                    routeInfo.route,

                label:
                    routeInfo.route,

            };

            nodes.push(node);

            nodeMap.set(
                routeInfo.route,
                node
            );

        }

        for (
            const routeInfo
            of routes
        ) {

            const route =
                routeInfo.route;

            if (
                route === "/"
            ) {
                continue;
            }

            const parts =
                route
                    .split("/")
                    .filter(Boolean);

            if (
                parts.length === 1
            ) {

                edges.push({

                    source: "/",

                    target: route,

                });

                continue;

            }

            const parentRoute =
                "/" +
                parts
                    .slice(
                        0,
                        parts.length - 1
                    )
                    .join("/");

            edges.push({

                source:
                    parentRoute,

                target:
                    route,

            });

        }

        return {

            nodes,

            edges,

        };

    }

}