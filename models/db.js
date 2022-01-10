const mysql = require("mysql")
const dbConfig = require("../config/db.config.js")


// create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
})


// open the MYSQL Connection

connection.connect(error => {
  if(error) {
   console.log(error)
    throw error;
  }
  console.log("Successfully connected to the database")
})

module.exports = connection
