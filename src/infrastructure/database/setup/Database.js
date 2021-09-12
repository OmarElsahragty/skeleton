import Sequelize from "sequelize";
import * as Models from "../models";
import connection from "./Connection";
import relationships from "./Relationships";

const Users = Models.Users(connection, Sequelize.DataTypes);

const Cites = Models.Cites(connection, Sequelize.DataTypes);
const Regions = Models.Regions(connection, Sequelize.DataTypes);

const Database = {
  connection,

  Users,

  Cites,
  Regions,
};

relationships(Database);

export default Database;
