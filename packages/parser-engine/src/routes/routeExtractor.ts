import path from "path";
import { RouteInfo } from "../types/RouteInfo";

export class RouteExtractor {

    extract(
        routeFiles: string[],
        projectPath: string
    ): RouteInfo[] {

        const routes: RouteInfo[] = [];

        for (const filePath of routeFiles) {

            let route =
                path.relative(
                    projectPath,
                    filePath
                );

            route =
                route.replaceAll(
                    "\\",
                    "/"
                );

            route =
                route.replace(
                    /^app/,
                    ""
                );

            route =
                route.replace(
                    /^pages/,
                    ""
                );

            route =
                route.replace(
                    /\/page\.(tsx|ts|jsx|js)$/,
                    ""
                );

            if (
                route === ""
            ) {

                route = "/";

            }

            const type =
                route.includes("[")
                    ? "dynamic"
                    : "static";

            routes.push({

                route,

                filePath,

                type,

            });

        }

        return routes;

    }

}