const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const axios = require("axios");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local");
require("dotenv").config();
const session = require("express-session");

const { db } = require("./database/db");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const store = new SequelizeStore({ db });
const { User, Movie } = require("./database/models");

const { API_KEY, NODE_ENV } = process.env;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(bodyParser.json());
app.use(compression());

app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: false,
		store: store,
	})
);
app.use(passport.initialize());
app.use(passport.session());
// app.use(passport.authenticate("session"));

passport.use(
	new LocalStrategy(async function (username, password, done) {
		await User.findOne(
			{
				where: { username: username },
			},
			function (err, user) {
				if (err) {
					return done(err);
				}
				if (!user) {
					return done(null, false);
				}
				if (!user.verifyPassword(password)) {
					return done(null, false);
				}
				console.log("usere", user);
				return done(null, user);
			}
		);
	})
);

passport.serializeUser(function (user, cb) {
	console.log(user);
	cb(null, {
		id: user.id,
		username: user.username,
		list: user.list,
	});
});

passport.deserializeUser((user, done) => {
	process.nextTick(function () {
		return done(null, user);
	});
});

app.post("/api/auth/signup", async function (req, res, next) {
	// generate on the fly:
	const { username, password } = req.body;
	try {
		const userData = await User.create({
			username: username,
			password: password,
		});
		const userJSON = JSON.stringify(userData);
		const user = JSON.parse(userJSON, null, 2);
		return req.login(user, () => res.send({ isLoggedIn: true, ...user }));
	} catch (error) {
		console.log(error);
		return res.send({ isLoggedIn: false, data: error });
	}
});

app.post(
	"/api/auth/login",
	passport.authenticate("local", { failureRedirect: "/login" }),
	function (req, res) {
		res.redirect("/");
	}
);

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

			movie.release_date = movie.release_date.slice(0, 4);
			let runtime = `${Math.floor(movie.runtime / 60)} HR ${Math.floor(
				movie.runtime % 60
			)}`;

			let cast = castData.map((actor) => actor.name).join(", ");
			director = directorData[0]?.name;

			movie.runtime = runtime;
			movie.cast = cast;
			movie.director = director;

			console.log(cast, director, directorData, movie.cast, movie.director);
			return movie;
		})
	);

	return res.send({ status: 200, data: fullRes });
});

app.get("/api/auth/me", async function (req, res) {
	console.log("/auth/me", req.session?.passport);
	if (req.user) {
		console.log("req.user", req.user);
		return res.send({ isLoggedIn: true, ...req.user });
	} else {
		return res.send({ isLoggedIn: false });
	}
});

app.get("/api/users/:id", async (req, res) => {
	try {
		let data = await User.findOne({
			where: { id: req.params.id },
			include: { model: Movie, as: "movies" },
		});
		const json = JSON.stringify(data);
		let user = JSON.parse(json);

		const detailsRes = await Promise.all(
			user.movies.map(
				async (movie) =>
					await axios
						.get(
							`https://api.themoviedb.org/3/movie/${movie.webID}?language=en-US`,
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

				movie.release_date = movie.release_date.slice(0, 4);
				let runtime = `${Math.floor(movie.runtime / 60)} HR ${Math.floor(
					movie.runtime % 60
				)}`;

				let cast = castData.map((actor) => actor.name).join(", ");
				director = directorData[0]?.name;

				movie.runtime = runtime;
				movie.cast = cast;
				movie.director = director;

				console.log(cast, director, directorData, movie.cast, movie.director);
				return movie;
			})
		);

		user.list = fullRes;
		return res.send(user);
	} catch (error) {
		console.log(error);
		return res.send({ status: 500, data: error });
	}
});

app.post("/api/users/:id/movies", async (req, res) => {
	const {
		id,
		poster,
		title,
		year,
		director,
		actors,
		rating,
		runtime,
		backdrop,
		overview,
	} = req.body;
	try {
		const movie = await Movie.findOrCreate({
			where: { webID: id },
			defaults: {
				webID: id,
				// title: title,
				// poster: poster,
				// overview: overview,
				// director: director[0]?.name,
				// cast: actors[0]?.name,
				// rating: 2,
				// runtime: runtime,
				// backdrop: backdrop,
				// year: year,
			},
		});
		const user = await User.findByPk(req.params.id);
		// add movie to user, through table for rating
		const movieData = await Movie.findOne({ where: { webID: id } });
		const json = JSON.stringify(movieData);
		const newMovie = JSON.parse(json);
		console.log("moviedata", newMovie);
		await user.addMovie(newMovie.id);

		return res.send({ status: 200 });
	} catch (error) {
		console.log(error);
		return res.send({ status: 500, data: error });
	}
});

// Connect to database
const syncDB = async () => {
	await db.sync({ force: true });
	console.log("All models were synchronized successfully.");
};

const authenticateDB = async () => {
	try {
		await db.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

syncDB();
authenticateDB();

const port = process.env.PORT || 9001;
app.listen(port, function () {
	console.log(`Server started on port ${port}...`);
});
