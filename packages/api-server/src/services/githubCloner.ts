import fs from "fs";
import os from "os";
import path from "path";
import { execSync } from "child_process";

export class GitHubCloner {

  public clone(
    repositoryUrl: string
  ): string {

    const repositoriesDir =
      path.join(
        os.tmpdir(),
        "react-atlas"
      );

    fs.mkdirSync(
      repositoriesDir,
      {
        recursive: true
      }
    );

    const targetPath =
      path.join(
        repositoriesDir,
        Date.now().toString()
      );

    execSync(
      `git clone --depth 1 ${repositoryUrl} "${targetPath}"`,
      {
        stdio: "inherit"
      }
    );

    return targetPath;
  }

}