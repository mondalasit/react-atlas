import { Router } from "express";
import multer from "multer";

import { ZipExtractor }
    from "../services/zipExtractor";

import { ProjectAnalyzer }
    from "../../../parser-engine/src/services/projectAnalyzer";

const router = Router();

const extractor =
    new ZipExtractor();

const analyzer =
    new ProjectAnalyzer();

const upload = multer({
    dest: "uploads/"
});

router.post(
    "/upload",
    upload.single("project"),
    async (req, res) => {

        try {

            if (!req.file) {

                return res
                    .status(400)
                    .json({
                        error:
                            "No file uploaded"
                    });

            }

            const extractedPath =
                extractor.extract(
                    req.file.path
                );

            const result =
                analyzer.analyze(
                    extractedPath
                );

            return res.json({

    success: true,

    originalName:
        req.file.originalname,

    extractedPath,

    graph:
        result.graph,

    components:
        result.components,

    routes:
        result.routes ?? [],

    routeGraph:
        result.routeGraph ?? {
            nodes: [],
            edges: [],
        },

    insights:
        result.insights ?? {

            rootComponents: [],

            leafComponents: [],

            deadComponents: [],

            mostImported: [],

        },

    circularDependencies:
        result.circularDependencies ?? [],

});

        } catch (error) {

            console.error(
                "Upload analysis failed:",
                error
            );

            return res
                .status(500)
                .json({

                    success: false,

                    error:
                        error instanceof Error
                            ? error.message
                            : "Internal server error",

                });

        }

    }
);

export default router;