// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// calling the ORM functions
var burger = {
	all: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	create: function (vals, cb) {
		orm.insertOne("burgers", "burger_name", vals, function(res){
			cb(res);
		})
	},
	update: function (condition, cb) {
		orm.updateOne("burgers", condition, function(res) {
			cb(res);
		});
	}
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
