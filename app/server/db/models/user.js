import { Sequelize, DataTypes } from "sequelize";
import db from "../index.js";

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

export default User;
