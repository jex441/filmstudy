const { Sequelize } = require("sequelize");
require("dotenv").config();
const { NODE_ENV, DB_URL } = process.env;
const config =
	NODE_ENV === "production"
		? {
				logging: false,
				dialect: "postgres",
				dialectOptions: {
					ssl: {
						require: true,
					},
				},
		  }
		: {
				logging: false,
		  };

const db = new Sequelize(DB_URL, config);

module.exports = { db };
