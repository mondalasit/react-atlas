import fs from "fs";
import { parse } from "@babel/parser";

export function parseAST(
  filePath: string
) {
  const code =
    fs.readFileSync(
      filePath,
      "utf8"
    );

  return parse(code, {
    sourceType: "module",
    plugins: [
      "jsx",
      "typescript"
    ]
  });
}