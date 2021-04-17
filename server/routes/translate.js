import {auth, translate} from "../handlers/handlers";
import express from "express";

const router = express.Router();

router.get("/", auth, translate);

export default router