import express from "express";
import { errorPath } from "../controllers/path_error.js";

const router = express.Router();

router.use(errorPath);

export default router;
