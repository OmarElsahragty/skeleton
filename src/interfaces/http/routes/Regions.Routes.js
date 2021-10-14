import express from "express";
import { Authenticate, Authorization, validate } from "../middlewares";
import { regionsController } from "../controllers";
import { systemValidation } from "../../../app/validations";

const router = express.Router();

// **==========================================================================
// **                            Regions
// **==========================================================================
router.get(
  "/city/:cityId/regions",
  Authenticate(),
  Authorization("citesAndRegions", "access"),
  validate(systemValidation.paginationQueryValidator, "query"),
  regionsController.showRegions
);

export default router;
