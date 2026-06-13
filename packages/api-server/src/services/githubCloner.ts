import { execSync } from "child_process";
import fs from "fs";
import path from "path";

export class GitHubCloner {

  public clone(
    repositoryUrl: string
  ): string {

    const repositoriesDir =
      path.join(
        process.cwd(),
        "repos"
      );

    fs.mkdirSync(
      repositoriesDir,
      { recursive: true }
    );

    const repoFolder =
      Date.now().toString();

    const targetPath =
      path.join(
        repositoriesDir,
        repoFolder
      );

    execSync(
      `git clone ${repositoryUrl} "${targetPath}"`,
      {
        stdio: "inherit"
      }
    );

    return targetPath;
  }
}