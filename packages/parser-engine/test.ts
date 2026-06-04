import { ProjectScanner } from "./src/scanners/projectScanner";
import { ComponentParser } from "./src/parsers/componentParser";
import { ChildComponentExtractor } from "./src/extractors/childComponentExtractor";
import { parseAST } from "./src/parsers/astParser";

const scanner = new ProjectScanner();

const parser =
  new ComponentParser();

const extractor =
  new ChildComponentExtractor();

const result = scanner.scan(
  "E:/Project/project/frontend"
);

for (const file of result.files) {
  const components =
    parser.parseFile(file);

  if (!components.length) {
    continue;
  }

  const ast = parseAST(file);

  const childrenMap =
    extractor.extract(ast);

  console.log(
    "\n=================="
  );

  console.log(file);

  console.table(components);

  console.log(
    "Children:",
    Object.fromEntries(
      childrenMap
    )
  );
}