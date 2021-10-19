import Errors from "../../errors";
import { Logger } from "../../../domain/utilities";
import { MultiMessages } from "../helpers";

// eslint-disable-next-line no-unused-vars
export default (err, req, res, _) => {
  const handledError = Errors.errorHandler(err);
  const requestInfo = `${req.ip} - ${req.method}:${req.originalUrl}`;

  const message =
    typeof handledError.message === "string"
      ? req.t(handledError.message)
      : MultiMessages(handledError.message, req);

  if (handledError.statusCode === 500) {
    const errorStack = handledError.internalError.stack
      .split("at")
      .reduce((prev, current) => {
        if (current.includes("src")) prev.push(current);
        return prev;
      }, [])
      .join("\n");
    Logger.error(
      `${requestInfo} ➡ ${handledError.statusCode} - ${handledError.internalError.message}\nERROR STACK TRACE ➡ ${errorStack}`
    );
  } else if (process.env.NODE_ENV === "Development") {
    Logger.error(`${requestInfo} ➡ ${handledError.statusCode} - ${message}`);
  }

  return res.status(handledError.statusCode).send({
    error: {
      error: handledError.error,
      message,
    },
  });
};
