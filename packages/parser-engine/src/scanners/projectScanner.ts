import fs from "fs";
import path from "path";
import { ScanResult } from "../types/ScanResult";

const VALID_EXTENSIONS = [
  ".tsx",
  ".ts",
  ".jsx",
  ".js"
];

const IGNORE_DIRS = [
  "node_modules",
  ".next",
  "dist",
  "build",
  ".git",
  "coverage"
];

export class ProjectScanner {
  public scan(projectPath: string): ScanResult {
    const files: string[] = [];

    this.walk(projectPath, files);

    return {
      totalFiles: files.length,
      files
    };
  }

  private walk(currentPath: string, files: string[]) {
    const entries = fs.readdirSync(currentPath);

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry);

      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        if (IGNORE_DIRS.includes(entry)) {
          continue;
        }

        this.walk(fullPath, files);
        continue;
      }

      const ext = path.extname(entry);

      if (VALID_EXTENSIONS.includes(ext)) {
        files.push(fullPath.replace(/\\/g, "/"));
      }
    }
  }
}