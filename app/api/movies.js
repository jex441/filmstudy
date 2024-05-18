import client from "./client";

const searchMovies = async (title) => {
	const res = await client.post("/search/movies", {
		title: title,
		headers: {
			"Content-Type": "application/json",
		},
	});
	return res.data;
};

export default {
	searchMovies,
};
