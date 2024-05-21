import client from "./client";

const me = async () => {
	const res = await client.get("/auth/me", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	console.log("me called:", res.data);
	return res.data;
};

const login = async ({ username, password }) => {
	const res = await client.post("/auth/login", {
		username: username,
		password: password,
		headers: {
			"Content-Type": "application/json",
		},
	});
	return res.data;
};

const signup = async (username, password) => {
	const res = await client.post("/auth/signup", {
		username: username,
		password: password,
		headers: {
			"Content-Type": "application/json",
		},
	});
	return res.data;
};

export default {
	me,
	login,
	signup,
};
