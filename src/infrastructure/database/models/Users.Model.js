import LocaleKeys from "../../../app/locales";

export default (connection, DataTypes) =>
  connection.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: {
          args: true,
          msg: LocaleKeys.USED_EMAIL,
        },
      },
      password: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      privileges: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: {
          citesAndRegions: { access: true },
        },
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      connection,
      tableName: "Users",
      schema: "public",
      timestamps: false,
      paranoid: false,
    }
  );
