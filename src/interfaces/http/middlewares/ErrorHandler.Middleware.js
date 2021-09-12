import Errors from "../../errors";
import { Logger } from "../../../domain/utilities";
import { MultiMessages } from "../helpers";

// eslint-disable-next-line no-unused-vars
export default (err, req, res, _) => {
  const handledError = Errors.errorHandler(err);

  const message =
    typeof handledError.message === "string"
      ? req.t(handledError.message)
      : MultiMessages(handledError.message, req);

  if (
    handledError.statusCode === 500 ||
    process.env.NODE_ENV === "Development"
  ) {
    Logger.error(
      `${handledError.statusCode} - ${
        handledError.statusCode === 500 ? handledError.internalError : message
      } - ${req.method} ${req.originalUrl} - ${req.ip}`
    );
  }

  return res.status(handledError.statusCode).send({
    error: {
      error: handledError.error,
      message,
    },
  });
};
