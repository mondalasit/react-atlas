import fs from "fs";

import { parseAST }
from "./src/parsers/astParser";

import { RouteExtractor }
from "./src/extractors/routeExtractor";

const file =
  "E:/Project/project/frontend/src/App.js";

const ast =
  parseAST(file);

const extractor =
  new RouteExtractor();

const routes =
  extractor.extract(ast);

console.log(routes);