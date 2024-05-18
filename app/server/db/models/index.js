import User from "./user.js";
import Movie from "./movie.js";

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

export { User, Movie };
