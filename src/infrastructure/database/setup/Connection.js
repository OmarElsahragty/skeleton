import Sequelize from "sequelize";
import Config from "../../../../config";

export default new Sequelize(
  Config.Database.Name,
  Config.Database.Username,
  Config.Database.Password,
  {
    dialect: Config.Database.Dialect,
    host: Config.Database.Host,
    port: Config.Database.Port,
    pool: Config.Database.Pool,

    logging:
      process.env.NODE_ENV === "DockerDataBaseRest" ||
      process.env.NODE_ENV === "Initialization" ||
      process.env.NODE_ENV === "Reset" ||
      process.env.NODE_ENV === "Delete",
  }
);
