const { db } = require("../db");
const { DataTypes } = require("sequelize");
const User_Movie = db.define("User_Movie", {
	watched: {
		type: DataTypes.BOOLEAN,
	},
	watchList: {
		type: DataTypes.BOOLEAN,
	},
	rating: {
		type: DataTypes.INTEGER,
	},
});

module.exports = { User_Movie };
