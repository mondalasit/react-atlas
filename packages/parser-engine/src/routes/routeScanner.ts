import fs from "fs";
import path from "path";

export class RouteScanner {

    scan(
        projectPath: string
    ): string[] {

        const routeFiles: string[] = [];

        this.walkDirectory(
            projectPath,
            routeFiles
        );

        return routeFiles;

    }

    private walkDirectory(
        currentPath: string,
        routeFiles: string[]
    ): void {

        const entries =
            fs.readdirSync(
                currentPath,
                {
                    withFileTypes: true,
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

                // Skip common folders that never contain routes

                if (
                    entry.name === "node_modules" ||
                    entry.name === ".next" ||
                    entry.name === "dist" ||
                    entry.name === "build" ||
                    entry.name === ".git"
                ) {

                    continue;

                }

                this.walkDirectory(
                    fullPath,
                    routeFiles
                );

                continue;

            }

            const isRouteFile =

                entry.name === "page.tsx" ||
                entry.name === "page.ts" ||
                entry.name === "page.jsx" ||
                entry.name === "page.js";

            if (
                isRouteFile
            ) {

                routeFiles.push(
                    fullPath
                );

            }

        }

    }

}