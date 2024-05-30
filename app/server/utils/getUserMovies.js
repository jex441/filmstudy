const { User_Movie } = require("../database/models/user_movie");
const { movieData } = require("./movieData");

async function getUserMovies(userID) {
	let moviesData = await User_Movie.findAll({
		where: { UserId: userID },
	});
	const moviesDataJson = JSON.stringify(moviesData);
	let movies = JSON.parse(moviesDataJson);

	let array = movies.map((movie) => {
		movie.id = movie.webID;
		return movie;
	});

	const res = await movieData(array);

	return res;
}
module.exports = { getUserMovies };
