const { Movie } = require("./movie");
const { User } = require("./user");
const { User_Movie } = require("./user_movie");

Movie.belongsToMany(User, {
	as: "users",
	through: User_Movie,
});

User.belongsToMany(Movie, {
	as: "movies",
	through: User_Movie,
});

module.exports = { User, Movie };
