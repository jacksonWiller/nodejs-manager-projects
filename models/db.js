const Sequelize = require('sequelize');

//conexão com o banco de dados MySql
const sequelize = new Sequelize('nodeTest', 'root', 'Jac@1234566',{
    host: 'localhost',
    dialect:'mysql'
  });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
