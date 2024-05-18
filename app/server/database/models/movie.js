const { db } = require("../db");
const { DataTypes } = require("sequelize");
const Movie = db.define("Movie", {
	webID: {
		type: DataTypes.STRING,
		unique: true,
	},
});

module.exports = { Movie };
