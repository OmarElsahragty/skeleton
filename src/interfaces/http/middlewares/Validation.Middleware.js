import { MultiMessages } from "../helpers";
import Errors from "../../errors";

export default (schema, validateWhat = "body") =>
  (req, _, next) => {
    try {
      const validatedData = schema.validateSync(req[validateWhat], {
        abortEarly: false,
        strict: false,
        stripUnknown: true,
      });
      req[validateWhat] = validatedData;
      next();
    } catch (err) {
      return next(Errors.http.badRequest(MultiMessages(err.errors, req)));
    }
  };
