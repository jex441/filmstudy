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

const { getUserMovies } = require("./utils/getUserMovies");

const { db } = require("./database/db");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const store = new SequelizeStore({ db });
const { User, Movie } = require("./database/models");
const { movieData } = require("./utils/movieData");
const { User_Movie } = require("./database/models/user_movie");

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
		const data = await User.findOne({
			where: { username: username },
		});
		const json = JSON.stringify(data, null, 2);
		const user = JSON.parse(json);

		if (!user) {
			return done(null, { status: 404 });
		}
		if (user.password !== password) {
			return done(null, { status: 404 });
		}
		return done(null, user);
	})
);

passport.serializeUser(function (user, cb) {
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
		if (req.user) {
			console.log("test");
			return res.send(req.user);
		} else {
			console.log("test");

			return res.send({ data: 404 });
		}
	}
);

app.post("/api/auth/logout", (req, res) => {
	req.logout(function (err) {
		req.session.destroy();
		return res.send({ status: 200 });
	});
});

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

	const resData = await movieData(response.data.results);

	return res.send({ status: 200, data: resData });
});

app.get("/api/auth/me", async function (req, res) {
	if (req.user) {
		return res.send({ isLoggedIn: true, ...req.user });
	} else {
		return res.send({ isLoggedIn: false });
	}
});

app.get("/api/users/:id", async (req, res) => {
	try {
		let data = await User_Movie.findAll({
			where: { UserId: req.params.id },
		});
		const json = JSON.stringify(data);
		let movies = JSON.parse(json);
		let array = movies.map((movie) => {
			movie.id = movie.webID;
			return movie;
		});
		const resData = await movieData(array);
		let user = {};
		user.list = resData;
		return res.send(user);
	} catch (error) {
		console.log(error);
		return res.send({ status: 500, data: error });
	}
});

app.post("/api/users/:id/movies/watched", async (req, res) => {
	const { id, rating } = req.body;
	try {
		const movie = await Movie.findOrCreate({
			where: { webID: id },
			defaults: {
				webID: id,
			},
		});
		let user = await User.findByPk(req.params.id);
		const newMovieData = await Movie.findOne({ where: { webID: id } });
		const json = JSON.stringify(newMovieData);
		const newMovie = JSON.parse(json);
		await user.addMovie(newMovie.id);
		await User_Movie.update(
			{
				webID: id,
				watched: true,
				watchList: true,
				rating: rating,
			},
			{ where: { UserId: user.id, MovieId: newMovie.id } }
		);

		const resData = await getUserMovies(req.params.id);
		return res.send(resData);
	} catch (error) {
		console.log(error);
		return res.send({ status: 500, data: error });
	}
});

app.post("/api/users/:id/movies/list", async (req, res) => {
	const { id } = req.body;
	try {
		const movie = await Movie.findOrCreate({
			where: { webID: id },
			defaults: {
				webID: id,
			},
		});
		const user = await User.findByPk(req.params.id);
		const movieData = await Movie.findOne({ where: { webID: id } });
		const json = JSON.stringify(movieData);
		const newMovie = JSON.parse(json);
		await user.addMovie(newMovie.id);
		await User_Movie.update(
			{
				webID: id,
				watchList: true,
				watched: false,
			},
			{ where: { UserId: user.id, MovieId: newMovie.id } }
		);

		const resData = await getUserMovies(req.params.id);
		return res.send(resData);
	} catch (error) {
		console.log(error);
		return res.send({ status: 500, data: error });
	}
});

app.put("/api/users/:id/movies", async (req, res) => {
	const { id } = req.body;
	try {
		const movie = await Movie.findOne({
			where: { webID: id },
		});
		await movie.removeUser(req.params.id);

		const resData = await getUserMovies(req.params.id);
		return res.send(resData);
	} catch (error) {
		console.log(error);
		return res.send({ status: 500, data: error });
	}
});

app.get("/api/users/:id/recs", async (req, res, next) => {
	const movies = await getUserMovies(req.params.id);
	const idx =
		movies.length > 1 ? Math.floor(Math.random() * (movies.length - 0)) : 0;

	// A very rudimentary reccomendations feature. Selects one from a user's list and returns similar movies based on TMDB's similar call.
	// Room for improvement here, to only search ones a user rated highly, or to return suggestions based on multiple user picks instead of just one.

	if (!movies.length) {
		return res.send({ status: 200, data: [] });
	}

	const url = `https://api.themoviedb.org/3/movie/${movies[idx].webID}/similar?language=en-US&page=1`;

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

	const resData = await movieData(response.data.results);

	return res.send({ status: 200, data: resData });
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
