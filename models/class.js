const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Class = sequelize.define("class", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Class;
