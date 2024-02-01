const Sequelize = require("sequelize");

const sequelize = new Sequelize("attendance", "root", "54321", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
