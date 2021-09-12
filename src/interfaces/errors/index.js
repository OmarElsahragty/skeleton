import BoomHttpErrors from "./Boom.Errors";
import SequelizeDatabaseErrors from "./Sequelize.Errors";
import { SERVER_ERROR } from "./constants";

class Errors {
  constructor() {
    this.http = new BoomHttpErrors();
    this.db = new SequelizeDatabaseErrors();
  }

  __handleHttpError(err) {
    if (err.isServer) {
      return SERVER_ERROR(err);
    } else return err.output.payload;
  }

  __handleUnknownError(err) {
    return SERVER_ERROR(err);
  }

  errorHandler(err) {
    if (this.http.isHttpError(err)) return this.http.handleError(err);
    if (this.db.isDatabaseError(err)) return this.db.handleError(err);
    return this.__handleUnknownError(err);
  }
}

export default new Errors();
