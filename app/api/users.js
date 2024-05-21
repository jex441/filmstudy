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
	const { data } = await client.post(`/users/${userID}/movies/watched`, {
		id: movie.id,
	});
	return { data: data };
};

const addMovieToWatchList = async (userID, movie) => {
	const { data } = await client.post(`/users/${userID}/movies/list`, {
		id: movie.id,
	});
	return { data: data };
};

const removeMovie = async (userID, movie) => {
	const { data } = await client.delete(`/users/${userID}/movies`, {
		id: movie.id,
	});
	return { data: data };
};

export default {
	addMovie,
	addMovieToWatchList,
	removeMovie,
	getUser,
};
