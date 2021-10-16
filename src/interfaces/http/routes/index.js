import express from "express";

import AuthRoutes from "./Auth.Routes";
import UsersRoutes from "./Users.Routes";
import RegionsRoutes from "./Regions.Routes";

const router = express.Router();

router.get("/api/ping", (_, res) => {
  res.status(200).json({
    success: true,
  });
});

router.use("/", AuthRoutes);
router.use("/", UsersRoutes);

router.use("/", RegionsRoutes);

export default router;
