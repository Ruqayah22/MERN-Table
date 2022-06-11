import express from "express";

import { getUser, createUser } from "../controllers/user-controller.js";

const router = express.Router();

router.get("/", getUser);
router.get("/get", createUser);

export default router;
