import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get(
  "/graph",
  (_req, res) => {

    res.json({
      nodes: [
        {
          id: "App",
          label: "App"
        },

        {
          id: "Auth",
          label: "Auth"
        },

        {
          id: "Dashboard",
          label: "Dashboard"
        }
      ],

      edges: [
        {
          source: "App",
          target: "Auth"
        },

        {
          source: "App",
          target: "Dashboard"
        }
      ]
    });

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