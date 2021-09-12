import express from "express";
import { Authenticate, Authorization } from "../middlewares";
import { regionsController } from "../controllers";

const router = express.Router();

// **==========================================================================
// **                            Regions
// **==========================================================================
router.get(
  "/city/:cityId/regions",
  Authenticate(),
  Authorization("citesAndRegions", "access"),
  regionsController.showRegions
);

export default router;
