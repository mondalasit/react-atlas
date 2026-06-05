import AdmZip from "adm-zip";
import fs from "fs";
import path from "path";

export class ZipExtractor {

  public extract(
    zipPath: string
  ): string {

    const projectId =
      Date.now().toString();

    const extractPath =
      path.join(
        "temp-projects",
        projectId
      );

    fs.mkdirSync(
      extractPath,
      {
        recursive: true
      }
    );

    const zip =
      new AdmZip(
        zipPath
      );

    zip.extractAllTo(
      extractPath,
      true
    );

    return extractPath;
  }
}