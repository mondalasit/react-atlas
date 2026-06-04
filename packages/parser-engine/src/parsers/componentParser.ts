import fs from "fs";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";

import { ComponentInfo } from "../types/ComponentInfo";
import { parseAST } from "./astParser";

export class ComponentParser {
    public parseFile(filePath: string): ComponentInfo[] {
        const code = fs.readFileSync(filePath, "utf8");

        const ast = parseAST(filePath);

        const components: ComponentInfo[] = [];

        traverse(ast, {
            FunctionDeclaration(path) {
                const name = path.node.id?.name;

                if (!name) return;

                if (
                    name[0] === name[0].toUpperCase()
                ) {
                    components.push({
                        id: `${filePath}:${name}`,
                        name,
                        type: "FunctionDeclaration",
                        filePath,
                        imports: [],
                        children: []
                    });
                }
            },

            VariableDeclarator(path) {
                const name = path.node.id;

                if (
                    name.type !== "Identifier"
                ) {
                    return;
                }

                if (
                    name.name[0] !==
                    name.name[0].toUpperCase()
                ) {
                    return;
                }

                const init = path.node.init;

                if (
                    init?.type ===
                    "ArrowFunctionExpression"
                ) {
                    components.push({
                        id: `${filePath}:${name.name}`,
                        name: name.name,
                        type: "ArrowFunction",
                        filePath,
                        imports: [],
                        children: []
                    });
                }
            }
        });

        return components;
    }
}