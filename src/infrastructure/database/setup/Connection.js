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
      process.env.NODE_ENV === "Rest" ||
      process.env.NODE_ENV === "Initialization",
  }
);
