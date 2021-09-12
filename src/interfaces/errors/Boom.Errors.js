import boom from "@hapi/boom";
import { SERVER_ERROR } from "./constants";

class BoomHttpErrors {
  notFound(message) {
    return boom.notFound(message);
  }

  unauthorized(message) {
    return boom.unauthorized(message);
  }

  forbidden(message) {
    return boom.forbidden(message);
  }

  badData(message) {
    return boom.badData(message);
  }

  badRequest(message) {
    return boom.badRequest(message);
  }

  isHttpError(err) {
    return boom.isBoom(err);
  }

  handleError(err) {
    if (err.isServer) return SERVER_ERROR(err);
    return err.output.payload;
  }
}

export default BoomHttpErrors;
