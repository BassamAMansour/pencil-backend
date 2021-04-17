import {login} from "../handlers/handlers";
import express from "express";

const router = express.Router();

router.post("/", login);

export default router;