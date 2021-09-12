import { DatabaseConnection } from "./src/infrastructure/database";
import { cacheConnection } from "./src/infrastructure/cache";
import Server from "./src/interfaces/http/server";
import Config from "./config";

/* eslint-disable no-console */

export default () => {
  try {
    cacheConnection.on("connect", () => {
      console.log(
        `Connected successfully to ${Config.Cache.Host}:${Config.Cache.Port} cache`
          .success
      );

      DatabaseConnection.authenticate().then(() => {
        console.log(
          `Successfully connected to ${Config.Database.Name} database`.success
        );
        new Server(Config.Port).start();
      });
    });
  } catch (err) {
    console.error(`${err.message}`.error);
  }
};
