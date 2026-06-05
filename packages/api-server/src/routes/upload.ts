import { Router } from "express";
import multer from "multer";
import { ZipExtractor } from "../services/zipExtractor";
import { ProjectAnalyzer } from "../../../parser-engine/src/services/projectAnalyzer";

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

        if (!req.file) {
            return res.status(400).json({
                error: "No file uploaded"
            });
        }

        const extractedPath =
            extractor.extract(
                req.file.path
            );

        const graph =
            analyzer.analyze(
                extractedPath
            );

        return res.json({
            success: true,

            originalName:
                req.file.originalname,

            extractedPath,

            graph
        });
    }
);

export default router;