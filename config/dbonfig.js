const config = require("./db.config.js")
var Sequelize = require('sequelize');
global.sequelize = new Sequelize(config.DB, 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });

global.User = sequelize.define('user', {
  email: Sequelize.STRING,
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  password: Sequelize.STRING
});


global.Role = sequelize.define('role', {
  name: Sequelize.STRING
});

