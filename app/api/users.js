import client from "./client";

const getUser = async (userID) => {
	const { data } = await client.get(`/users/${userID}`, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	return { data: data };
};

const addMovie = async (userID, movie) => {
	console.log("movie", movie);
	const { data } = await client.post(`/users/${userID}/movies`, {
		id: movie.id,
		poster: movie.poster_path,
		title: movie.title,
		year: movie.year,
		director: movie.director,
		actors: movie.cast,
		rating: movie.rating,
		runtime: movie.runtime,
		backdrop: movie.backdrop_path,
		overview: movie.overview,
	});
	return { data: data };
};

export default {
	addMovie,
	getUser,
};
