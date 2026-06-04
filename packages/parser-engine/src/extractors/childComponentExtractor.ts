import traverse from "@babel/traverse";
import * as t from "@babel/types";

export class ChildComponentExtractor {
  public extract(ast: t.File): Map<string, string[]> {
    const componentChildren = new Map<string, string[]>();

    traverse(ast, {
      FunctionDeclaration(path) {
        const componentName = path.node.id?.name;

        if (!componentName) {
          return;
        }

        if (
          componentName[0] !==
          componentName[0].toUpperCase()
        ) {
          return;
        }

        const children: string[] = [];

        path.traverse({
          JSXOpeningElement(jsxPath) {
            const nameNode =
              jsxPath.node.name;

            if (
              nameNode.type ===
              "JSXIdentifier"
            ) {
              const childName =
                nameNode.name;

              if (
                childName[0] ===
                  childName[0].toUpperCase() &&
                childName !== componentName
              ) {
                children.push(childName);
              }
            }
          }
        });

        componentChildren.set(
          componentName,
          [...new Set(children)]
        );
      }
    });

    return componentChildren;
  }
}