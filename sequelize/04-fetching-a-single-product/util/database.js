const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'root1', 'root1', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;