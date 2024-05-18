const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const axios = require("axios");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
require("dotenv").config();

const { db } = require("./database/db");
const { User } = require("./database/models");

const { API_KEY, NODE_ENV } = process.env;

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: false,
		cookie: { secure: true },
	})
);

// passport.serializeUser(function (user, cb) {
// 	process.nextTick(function () {
// 		return cb(null, user.id);
// 	});
// });

// passport.deserializeUser(function (id, cb) {
// 	db.get("SELECT * FROM users WHERE id = ?", [id], function (err, user) {
// 		if (err) {
// 			return cb(err);
// 		}
// 		return cb(null, user);
// 	});
// });

passport.use(
	new LocalStrategy(function (username, password, done) {
		User.findOne({ username: username }, function (err, user) {
			if (err) {
				return done(err);
			}
			if (!user) {
				return done(null, false);
			}
			if (!user.verifyPassword(password)) {
				return done(null, false);
			}
			return done(null, user);
		});
	})
);

app.get("/api/auth/me", async function (req, res) {
	console.log("boom");
	if (req.user) return res.send({ isLoggedIn: true, ...req.user });
	else {
		return res.send({ isLoggedIn: false });
	}
});

app.post("/signup", async function (req, res) {
	await User.create({
		username: req.body.username,
		password: req.body.password,
	});
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
			let cast = [];
			let director = [];
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
					cast = res.data.cast.slice(0, 5);
					director = res.data.crew.filter(
						(person) => person.job === "Director"
					);
				})
				.catch((err) => {
					return err;
				});
			movie.cast = cast;
			movie.director = director;
			return movie;
		})
	);

	return res.send({ status: 200, data: fullRes });
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
