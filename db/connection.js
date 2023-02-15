const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DBUSERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 5,
  dateStrings: true,
});

module.exports = connection;
