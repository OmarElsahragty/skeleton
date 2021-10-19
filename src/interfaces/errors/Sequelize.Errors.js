import { BaseError, ValidationError, DatabaseError } from "sequelize";
import { SERVER_ERROR } from "./constants";

class SequelizeDatabaseErrors {
  isDatabaseError(err) {
    return err instanceof BaseError;
  }

  isAppDatabaseError(err) {
    return err instanceof DatabaseError;
  }

  isValidationError(err) {
    return err instanceof ValidationError;
  }

  handleAppDatabaseError(err) {
    return SERVER_ERROR(err);
  }

  handleValidationError(err) {
    return {
      statusCode: 422,
      error: "Bad Data",
      message: err.errors.map((validationErrItem) => validationErrItem.message),
    };
  }

  handleError(err) {
    if (this.isValidationError(err)) return this.handleValidationError(err);
    if (this.isAppDatabaseError(err)) return this.handleAppDatabaseError(err);

    return SERVER_ERROR(err);
  }
}

export default SequelizeDatabaseErrors;
