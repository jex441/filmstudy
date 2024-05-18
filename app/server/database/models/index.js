const { Movie } = require("./movie");
const { User } = require("./user");

Movie.belongsToMany(User, {
	as: "movies",
	foreignKey: "userID",
	otherKey: "movieID",
	through: "User_Movies",
});

User.belongsToMany(Movie, {
	as: "users",
	foreignKey: "movieID",
	otherKey: "userID",
	through: "User_Movies",
});

module.exports = { User, Movie };
