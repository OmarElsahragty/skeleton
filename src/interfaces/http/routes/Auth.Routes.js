import express from "express";
import { validate } from "../middlewares";
import { authController } from "../controllers";
import { userValidation } from "../../../app/validations";

const router = express.Router();

// **==========================================================================
// **                                Auth
// **==========================================================================
router.post("/login", validate(userValidation.login), authController.login);

router.post(
  "/registration",
  validate(userValidation.registration),
  authController.registration
);

export default router;
