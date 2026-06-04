import traverse from "@babel/traverse";
import * as t from "@babel/types";

import { ImportInfo } from "../types/ImportInfo";

export class ImportExtractor {
  public extract(ast: t.File): ImportInfo[] {
    const imports: ImportInfo[] = [];

    traverse(ast, {
      ImportDeclaration(path) {
        const source =
          path.node.source.value;

        const isLocal =
          source.startsWith("./") ||
          source.startsWith("../");

        path.node.specifiers.forEach(
          specifier => {
            if (
              specifier.type ===
              "ImportDefaultSpecifier"
            ) {
              imports.push({
                componentName:
                  specifier.local.name,
                source,
                isLocal
              });
            }
          }
        );
      }
    });

    return imports;
  }
}