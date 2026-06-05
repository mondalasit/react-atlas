import express from "express";
import cors from "cors";

import { ProjectAnalyzer }
from "../../parser-engine/src/services/projectAnalyzer";

const app = express();

app.use(cors());

app.use(express.json());

const analyzer =
  new ProjectAnalyzer();

app.post(
  "/analyze",
  (req, res) => {

    const {
      projectPath
    } = req.body;

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