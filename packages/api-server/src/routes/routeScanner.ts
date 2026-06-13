import fs from "fs";
import path from "path";

export class RouteScanner {

    scan(
        projectPath: string
    ): string[] {

        const routes: string[] = [];

        this.walk(
            projectPath,
            routes
        );

        return routes;
    }

    private walk(
        currentPath: string,
        routes: string[]
    ): void {

        const entries =
            fs.readdirSync(
                currentPath,
                {
                    withFileTypes: true
                }
            );

        for (const entry of entries) {

            const fullPath =
                path.join(
                    currentPath,
                    entry.name
                );

            if (
                entry.isDirectory()
            ) {

                this.walk(
                    fullPath,
                    routes
                );

                continue;
            }

            const isRouteFile =
                entry.name === "page.tsx" ||
                entry.name === "page.ts" ||
                entry.name === "page.jsx" ||
                entry.name === "page.js";

            if (isRouteFile) {

                routes.push(
                    fullPath
                );

            }

        }

    }

}