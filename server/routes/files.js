import express from "express";
import {upload} from "../handlers/files/upload";
import {download} from "../handlers/files/download";
import {auth} from "../handlers/handlers";

const router = express.Router();

router.post("/upload", auth, upload);
router.get("/download/:id", auth, download);

export default router;