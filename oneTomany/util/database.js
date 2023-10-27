const Sequelize = require('sequelize');

const sequelize = new Sequelize('Association', 'root', 'Arti@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
