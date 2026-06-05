import { ProjectScanner } from "./src/scanners/projectScanner";
import { ComponentParser } from "./src/parsers/componentParser";
import { ChildComponentExtractor } from "./src/extractors/childComponentExtractor";
import { ImportExtractor } from "./src/extractors/importExtractor";
import { ComponentTreeAnalyzer } from "./src/analyzers/componentTreeAnalyzer";
import { parseAST } from "./src/parsers/astParser";
import { GraphBuilder } from "./src/builders/graphBuilder";

const scanner = new ProjectScanner();

const parser =
  new ComponentParser();

const childExtractor =
  new ChildComponentExtractor();

const importExtractor =
  new ImportExtractor();

const analyzer =
  new ComponentTreeAnalyzer();

const graphBuilder =
  new GraphBuilder();

/**

* Final component relationships
*
* Example:
* {
* App: ["Auth", "Dashboard"],
* Dashboard: ["Sidebar"]
* }
  */
const relationships:
  Record<string, string[]> = {};

const result = scanner.scan(
  "E:/Project/project/frontend"
);

for (const file of result.files) {

  const components =
    parser.parseFile(file);

  if (!components.length) {
    continue;
  }

  const ast =
    parseAST(file);

  const childrenMap =
    childExtractor.extract(ast);

  const imports =
    importExtractor.extract(ast);

  console.log(
    "\n======================================"
  );

  console.log(
    "FILE:",
    file
  );

  console.log(
    "\nCOMPONENTS"
  );

  console.table(components);

  console.log(
    "\nIMPORTS"
  );

  console.table(imports);

  console.log(
    "\nJSX CHILDREN"
  );

  console.log(
    Object.fromEntries(childrenMap)
  );

  console.log(
    "\nREAL CHILDREN"
  );

  for (
    const [
      componentName,
      children
    ] of childrenMap
  ) {

const realChildren =
  analyzer.build(
    children,
    imports
  );

relationships[
  componentName
] = realChildren;

console.log(
  `${ componentName } -> `,
  realChildren
);

  }
}

/**

* Build graph from all relationships
  */
const graph =
  graphBuilder.build(
    relationships
  );

console.log(
  "\n======================================"
);

console.log(
  "GRAPH JSON"
);

console.log(
  JSON.stringify(
    graph,
    null,
    2
  )
);
