import {auth, parse} from "../handlers/handlers";
import express from "express";

const router = express.Router();

router.get("/:url", auth, parse);

export default router