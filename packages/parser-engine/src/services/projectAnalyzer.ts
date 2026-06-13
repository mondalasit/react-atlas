import { ProjectScanner } from "../scanners/projectScanner";
import { ComponentParser } from "../parsers/componentParser";
import { ChildComponentExtractor } from "../extractors/childComponentExtractor";
import { ImportExtractor } from "../extractors/importExtractor";
import { ComponentTreeAnalyzer } from "../analyzers/componentTreeAnalyzer";
import { GraphBuilder } from "../builders/graphBuilder";
import { parseAST } from "../parsers/astParser";
import { ArchitectureInsightsBuilder } from "./architectureInsights";
import { RouteScanner } from "../routes/routeScanner";
import { RouteExtractor } from "../routes/routeExtractor";
import { RouteGraphBuilder } from "../routes/routeGraphBuilder";
import { AnalysisResult } from "../types/AnalysisResult";
import { ComponentDetails } from "../types/ComponentDetails";
import { CircularDependencyAnalyzer } from "../analyzers/circularDependencyAnalyzer";

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
  private insightsBuilder =
    new ArchitectureInsightsBuilder();

  private routeScanner =
    new RouteScanner();

  private routeExtractor =
    new RouteExtractor();

  private routeGraphBuilder =
    new RouteGraphBuilder();

  private circularDependencyAnalyzer =
    new CircularDependencyAnalyzer();

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

    const insights =
      this.insightsBuilder.build(
        graph
      );
    const circularDependencies =
      this.circularDependencyAnalyzer
        .analyze(
          graph.edges
        );
    /*
     * Route Intelligence
     */

    const routeFiles =
      this.routeScanner.scan(
        projectPath
      );

    const routes =
      this.routeExtractor.extract(
        routeFiles,
        projectPath
      );

    const routeGraph =
      this.routeGraphBuilder.build(
        routes
      );

    return {

      graph,

      components,

      routes,

      routeGraph,

      insights,

      circularDependencies,

    };
  }

}