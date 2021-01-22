const dbConfig = require("../config/config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port:dbConfig.PORT,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.MAX,
    min: dbConfig.pool.MIN,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.productss = require("./products")(sequelize, Sequelize);
db.cards = require("./card")(sequelize, Sequelize);
db.categorys = require("./category")(sequelize, Sequelize);
db.maincards = require("./RefCard")(sequelize, Sequelize);
db.user=require("./users")(sequelize, Sequelize);
db.Recipes=require("./recipe")(sequelize, Sequelize);

module.exports = db;