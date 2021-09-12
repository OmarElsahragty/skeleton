import Database, { DatabaseSeeds } from "../src/infrastructure/database";
import "../TerminalColors";

Database.connection
  .sync({
    force: process.env.NODE_ENV === "Rest" || process.env.NODE_ENV === "Docker", // * ENABLED FORCE MODE ON REST OR DOCKER
    alter: false,
  })
  .then(async () => {
    await DatabaseSeeds(Database);

    // eslint-disable-next-line no-console
    console.log(
      `Database ${
        process.env.NODE_ENV === "Rest" || process.env.NODE_ENV === "Docker"
          ? "rested"
          : "initialized"
      } successfully`.success
    );
  })
  .catch((error) => console.error(`${error.message}`.error));
