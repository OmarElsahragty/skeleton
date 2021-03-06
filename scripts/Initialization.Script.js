import Database, { DatabaseSeeds } from "../src/infrastructure/database";
import { ErrorHandler } from "./Utilities";
import "../TerminalColors";

/* eslint-disable no-console */

Database.connection
  .sync({
    // * ENABLED FORCE MODE ON REST OR DOCKER OR DELETE
    force:
      process.env.NODE_ENV === "DockerDataBaseRest" ||
      process.env.NODE_ENV === "Reset" ||
      process.env.NODE_ENV === "Delete",
    alter: false,
  })
  .then(async () => {
    if (process.env.NODE_ENV !== "Delete") {
      await DatabaseSeeds(Database);
    }

    if (process.env.NODE_ENV === "Delete") {
      console.log("Database deleted successfully".success);
    } else {
      console.log(
        `Database ${
          process.env.NODE_ENV === "Reset" ||
          process.env.NODE_ENV === "DockerDataBaseRest"
            ? "rested"
            : "initialized"
        } successfully`.success
      );
    }
  })
  .catch((err) => ErrorHandler(err));
