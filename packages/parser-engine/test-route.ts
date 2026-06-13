import { ArchitectureInsightsBuilder }
from "./src/services/architectureInsights";

const insightsBuilder =
    new ArchitectureInsightsBuilder();

const graph = {

    nodes: [

        { id: "App", label: "App" },

        { id: "Auth", label: "Auth" },

        { id: "Sidebar", label: "Sidebar" },

        { id: "Track", label: "Track" },

    ],

    edges: [

        {
            source: "App",
            target: "Auth",
        },

        {
            source: "Auth",
            target: "Sidebar",
        },

        {
            source: "Auth",
            target: "Track",
        },

    ],

};

const insights =
    insightsBuilder.build(
        graph
    );

console.log(insights);