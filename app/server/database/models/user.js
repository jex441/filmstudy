const { db } = require("../db");
const { DataTypes } = require("sequelize");

const User = db.define("User", {
	username: {
		type: DataTypes.STRING,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
		unique: true,
	},
});

module.exports = { User };
