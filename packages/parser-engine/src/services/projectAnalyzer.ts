import { ProjectScanner } from "../scanners/projectScanner";
import { ComponentParser } from "../parsers/componentParser";
import { ChildComponentExtractor } from "../extractors/childComponentExtractor";
import { ImportExtractor } from "../extractors/importExtractor";
import { ComponentTreeAnalyzer } from "../analyzers/componentTreeAnalyzer";
import { GraphBuilder } from "../builders/graphBuilder";
import { parseAST } from "../parsers/astParser";

import {
  AnalysisResult,
  ComponentDetails
} from "../types/AnalysisResult";

export class ProjectAnalyzer {

  private scanner =
    new ProjectScanner();

  private parser =
    new ComponentParser();

  private childExtractor =
    new ChildComponentExtractor();

  private importExtractor =
    new ImportExtractor();

  private componentTreeAnalyzer =
    new ComponentTreeAnalyzer();

  private graphBuilder =
    new GraphBuilder();

  public analyze(
    projectPath: string
  ): AnalysisResult {

    const relationships:
      Record<string, string[]> = {};

    const components:
      ComponentDetails[] = [];

    const scanResult =
      this.scanner.scan(
        projectPath
      );

    for (
      const file
      of scanResult.files
    ) {

      const parsedComponents =
        this.parser.parseFile(
          file
        );

      if (
        parsedComponents.length === 0
      ) {
        continue;
      }

      const ast =
        parseAST(file);

      const childrenMap =
        this.childExtractor.extract(
          ast
        );

      const imports =
        this.importExtractor.extract(
          ast
        );

      for (
        const component
        of parsedComponents
      ) {

        const children =
          childrenMap.get(
            component.name
          ) || [];

        const realChildren =
          this.componentTreeAnalyzer.build(
            children,
            imports
          );

        relationships[
          component.name
        ] = realChildren;

        components.push({

          id:
            component.id,

          name:
            component.name,

          filePath:
            component.filePath,

          imports:
            imports.map(
              item =>
                item.componentName
            ),

          children:
            realChildren

        });

      }

    }

    const graph =
      this.graphBuilder.build(
        relationships
      );

    return {

      graph,

      components

    };
  }

}