const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const axios = require("axios");
require("dotenv").config();

const { API_KEY } = process.env;
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

app.post("/api/search/movies", async (req, res, next) => {
	if (!req.body.title) return res.send(400);
	const url = `https://api.themoviedb.org/3/search/movie?query=${req.body.title}&include_adult=false&language=en-US&page=1`;

	const response = await axios
		.get(url, {
			headers: {
				Authorization: `Bearer ${API_KEY}`,
			},
		})
		.then((res) => {
			return res;
		})
		.catch((err) => console.error("error:" + err));

	const detailsRes = await Promise.all(
		response.data.results.slice(0, 6).map(
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

	const fullRes = await Promise.all(
		detailsRes.map(async (movie) => {
			let cast = [];
			let crew = [];
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
					cast = res.data.cast;
					crew = res.data.crew;
				})
				.catch((err) => {
					return err;
				});
			movie.cast = cast;
			movie.crew = crew;
			return movie;
		})
	);

	return res.send({ status: 200, data: fullRes });
});

const port = process.env.PORT || 9001;
app.listen(port, function () {
	console.log(`Server started on port ${port}...`);
});
