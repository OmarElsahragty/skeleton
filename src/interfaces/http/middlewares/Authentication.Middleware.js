import jwt from "jsonwebtoken";
import Config from "../../../../config";
import Errors from "../../errors";
import { usersPackage } from "../../../app/packages";
import LocaleKeys from "../../../app/locales";

// *==========================================================================
// *                           Admin Check Cases
// *==========================================================================
// * adminCheck = false  -->   pass users  (only)
// * adminCheck = true   -->   pass admins (only)
// * adminCheck = null   -->   pass both
// *==========================================================================

export default (adminCheck = null) => {
  return (req, _, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
      return next(Errors.http.unauthorized(LocaleKeys.NO_TOKEN));
    }

    jwt.verify(token, Config.JwtSecret, async (err, decoded) => {
      if (err) return next(Errors.http.unauthorized(LocaleKeys.UNAUTHORIZED));

      const { id, privileges, isAdmin } = await usersPackage.checkUser(
        decoded.id,
        decoded.email,
        adminCheck
      );

      if (!id) {
        return next(Errors.http.forbidden(LocaleKeys.FORBIDDEN));
      }

      req.userId = id;
      req.isAdmin = isAdmin;
      req.privileges = privileges;

      next();
    });
  };
};
