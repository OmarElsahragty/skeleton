import express from "express";
import { Authenticate } from "../middlewares";
import { usersController } from "../controllers";

const router = express.Router();

// **==========================================================================
// **                                Users
// **==========================================================================
router.get("/profile", Authenticate(), usersController.profile);

export default router;
