// Requires mysql
var mysql = require("mysql");


// Creates connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    //Port
    port: 3306,
    // Username
    user: "root",
    // Password
    password: "izabella",
    // DataBase
    database: "burgers_db"
  });
};

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Test comment
module.exports = connection;