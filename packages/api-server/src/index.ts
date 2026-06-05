import express from "express";
import cors from "cors";

import { ProjectAnalyzer }
from "../../parser-engine/src/services/projectAnalyzer";
import uploadRoute from "./routes/upload";

const app = express();

app.use(cors());

app.use(express.json());
app.use(uploadRoute);

const analyzer =
  new ProjectAnalyzer();

app.post(
  "/analyze",
  (req, res) => {

    const {
      projectPath
    } = req.body;

    if (!projectPath) {

      return res
        .status(400)
        .json({
          error:
            "projectPath required"
        });
    }

    const graph =
      analyzer.analyze(
        projectPath
      );

    res.json(graph);
  }
);

app.listen(
  4000,
  () => {
    console.log(
      "API running on port 4000"
    );
  }
);