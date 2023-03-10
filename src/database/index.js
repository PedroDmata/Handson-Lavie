const { Sequelize } = require("sequelize");

const DB_NAME = "clinica";
const DB_USER = "root";
const DB_PASS = "@Pedro2008";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};
let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Erro ao conectar com o banco de dados: ", error.message);
}

const hasConnection = async () => {
  try {
    await db.authenticate();
    console.log("Banco de dados conectado!");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados: ", error.message);
  }
};

Object.assign(db, { hasConnection });

module.exports = db;
