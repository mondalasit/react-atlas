import { ProjectScanner } from "./src/scanners/projectScanner";

const scanner = new ProjectScanner();

const result = scanner.scan(
  "/Project/project/frontend"
);

console.log(result);