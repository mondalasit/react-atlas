import { ImportInfo } from "../types/ImportInfo";

export class ComponentTreeAnalyzer {

  public build(
    jsxChildren: string[],
    imports: ImportInfo[]
  ): string[] {

    const localImports =
      new Set(
        imports
          .filter(
            imp => imp.isLocal
          )
          .map(
            imp => imp.componentName
          )
      );

    return jsxChildren.filter(
      child =>
        localImports.has(child)
    );
  }
}