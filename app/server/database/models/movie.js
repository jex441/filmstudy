const { db } = require("../db");
const { DataTypes } = require("sequelize");
const Movie = db.define("Movie", {
	webID: {
		type: DataTypes.INTEGER,
		unique: true,
	},
	title: {
		type: DataTypes.STRING,
	},
	year: {
		type: DataTypes.STRING,
	},
	overview: {
		type: DataTypes.TEXT,
	},
	cast: {
		type: DataTypes.STRING,
	},
	director: {
		type: DataTypes.STRING,
	},
	rating: {
		type: DataTypes.STRING,
	},
	runtime: {
		type: DataTypes.STRING,
	},
	poster: {
		type: DataTypes.STRING,
	},
	backdrop: {
		type: DataTypes.STRING,
	},
	video: {
		type: DataTypes.STRING,
	},
});

module.exports = { Movie };
