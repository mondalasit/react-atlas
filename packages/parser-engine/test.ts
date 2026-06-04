import { ProjectScanner } from "./src/scanners/projectScanner";
import { ComponentParser } from "./src/parsers/componentParser";

const scanner = new ProjectScanner();

const parser = new ComponentParser();

const result = scanner.scan(
  "E:/Project/project/frontend"
);

for (const file of result.files) {
  const components =
    parser.parseFile(file);

  if (components.length > 0) {
    console.log(
      "\nFile:",
      file
    );

    console.table(components);
  }
}