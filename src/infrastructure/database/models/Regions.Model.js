export default (connection, DataTypes) =>
  connection.define(
    "Regions",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Cites",
          key: "id",
        },
      },
      arabicName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      englishName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      connection,
      tableName: "Regions",
      schema: "public",
      timestamps: false,
      paranoid: false,
      indexes: [
        {
          unique: { args: true },
          fields: ["arabicName", "englishName", "cityId"],
        },
      ],
    }
  );
