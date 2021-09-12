import Errors from "../../errors";
import LocaleKeys from "../../../app/locales";

export default (moduleName, privilegeName) => {
  return async (req, _, next) => {
    const { isAdmin, privileges } = req;

    if (!isAdmin && !privileges[moduleName][privilegeName]) {
      return next(Errors.http.forbidden(LocaleKeys.FORBIDDEN));
    }

    next();
  };
};
