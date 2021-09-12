import LocaleKeys from "../../../app/locales";
import Errors from "../../errors";

class BaseController {
  constructor() {
    this.LocaleKeys = LocaleKeys;
  }

  async exec(next, fn, ...params) {
    const { err, data } = await fn(...params);
    if (err) {
      if (err.isAppError) {
        return err.error === this.LocaleKeys.NO_DATA_404
          ? next(Errors.http.notFound(err.error))
          : next(Errors.http.badRequest(err.error));
      }
      return next(err.error);
    }

    return data;
  }

  okRes(req, res, data, statusCode = 200) {
    return res.status(statusCode).json({
      message: req.t(LocaleKeys.OK),
      data,
    });
  }
}

export default BaseController;
