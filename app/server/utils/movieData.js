require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const movieData = async function movieData(array) {
	const basicData = await Promise.all(
		array.slice(0, 6).map(
			async (movie) =>
				await axios
					.get(
						`https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`,
						{
							headers: {
								Authorization: `Bearer ${API_KEY}`,
							},
						}
					)
					.then((res) => {
						return res.data;
					})
					.catch((err) => {
						return err;
					})
		)
	);

	const fullData = await Promise.all(
		basicData.map(async (movie) => {
			let castData = [];
			let directorData = [];

			await axios
				.get(
					`https://api.themoviedb.org/3/movie/${movie.id}/credits?language=en-US`,
					{
						headers: {
							Authorization: `Bearer ${API_KEY}`,
						},
					}
				)
				.then((res) => {
					castData = res.data.cast.slice(0, 5);
					directorData = res.data.crew.filter(
						(person) => person.job === "Director"
					);
				})
				.catch((err) => {
					return err;
				});

			movie.year = movie?.release_date.slice(0, 4);
			let runtime = `${Math.floor(movie.runtime / 60)} HR ${Math.floor(
				movie.runtime % 60
			)}`;

			let cast = castData.map((actor) => actor.name).join(", ");
			director = directorData[0]?.name;

			movie.runtime = runtime;
			movie.cast = cast;
			movie.director = director;

			return movie;
		})
	);
	return fullData;
};

module.exports = { movieData };
