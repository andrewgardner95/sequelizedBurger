// Import MySQL connection.
var connection = require("../config/connection.js");

// function to display all queries
var orm = {
  selectAll: function(tableName, callback) {
    var queryString = "SELECT * FROM " + tableName + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  // function to create a new query in burgers_db
  insertOne: function(table, cols, vals, callback) {
    var queryString = "INSERT INTO " + table +" ("+cols.toString()+") VALUES (?)";
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  // function to update a database query
  updateOne: function(table, condition, callback) {
    var queryString = "UPDATE " + table +" SET devoured = true WHERE "+condition;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;