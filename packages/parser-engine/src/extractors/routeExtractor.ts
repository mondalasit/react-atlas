import traverse from "@babel/traverse";
import * as t from "@babel/types";

import { RouteInfo } from "../types/RouteInfo";

export class RouteExtractor {

  public extract(
    ast: t.File
  ): RouteInfo[] {

    const routes: RouteInfo[] = [];

    traverse(ast, {

      JSXElement(path) {

        const opening =
          path.node.openingElement;

        if (
          !t.isJSXIdentifier(
            opening.name
          )
        ) {
          return;
        }

        if (
          opening.name.name !==
          "Route"
        ) {
          return;
        }

        let routePath = "";
        let component = "";

        for (
          const attr of opening.attributes
        ) {

          if (
            !t.isJSXAttribute(attr)
          ) {
            continue;
          }

          if (
            attr.name.name ===
            "path"
          ) {

            if (
              t.isStringLiteral(
                attr.value
              )
            ) {
              routePath =
                attr.value.value;
            }

          }

          if (
            attr.name.name ===
            "element"
          ) {

            if (
              t.isJSXExpressionContainer(
                attr.value
              )
            ) {

              const expr =
                attr.value.expression;

              if (
                t.isJSXElement(expr)
              ) {

                const name =
                  expr.openingElement.name;

                if (
                  t.isJSXIdentifier(
                    name
                  )
                ) {

                  component =
                    name.name;
                }
              }
            }
          }
        }

        if (
          routePath &&
          component
        ) {

          routes.push({
            path: routePath,
            component
          });

        }

      }

    });

    return routes;
  }
}