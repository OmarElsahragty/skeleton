export default ({ Cites, Regions }) => {
  // * Auto Generator Command  -->  npx sequelize-auto -h [Host] -d [Database] -u [Username] -x [Password] -p 5432 --dialect [Dialect] -o ./sequelize-auto

  Regions.belongsTo(Cites, { as: "city", foreignKey: "cityId" });
  Cites.hasMany(Regions, { as: "Regions", foreignKey: "cityId" });
};
