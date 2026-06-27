import fs from "fs";
import { Router } from "express";

import { GitHubCloner }
  from "../services/githubCloner";

import { ProjectAnalyzer }
  from "../../../parser-engine/src/services/projectAnalyzer";

const router = Router();

const cloner =
  new GitHubCloner();

const analyzer =
  new ProjectAnalyzer();

router.post(
  "/analyze-github",
  async (req, res) => {

    let projectPath = "";

    try {

      const {
        repositoryUrl
      } = req.body;

      if (!repositoryUrl) {

        return res
          .status(400)
          .json({
            error:
              "Repository URL required"
          });

      }

      projectPath =
        cloner.clone(
          repositoryUrl
        );

      const result =
        analyzer.analyze(
          projectPath
        );

      return res.json({

        success: true,

        graph:
          result.graph,

        components:
          result.components,

        routes:
          result.routes,

        routeGraph:
          result.routeGraph,

        insights:
          result.insights,

        circularDependencies:
          result.circularDependencies,

      });

    } catch (error) {

      console.error(error);

      return res
        .status(500)
        .json({

          success: false,

          error:
            error instanceof Error
              ? error.message
              : "Unknown error"

        });

    } finally {

      if (
        projectPath &&
        fs.existsSync(
          projectPath
        )
      ) {

        try {

          fs.rmSync(
            projectPath,
            {
              recursive: true,
              force: true,
            }
          );

          console.log(
            `Deleted temporary repository: ${projectPath}`
          );

        } catch (cleanupError) {

          console.error(
            "Failed to delete temporary repository:",
            cleanupError
          );

        }

      }

    }

  }
);

export default router;