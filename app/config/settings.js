import { Constants } from "expo-constants";

const settings = {
	dev: {
		apiUrl: "https://filmstudy-production.up.railway.app/api",
	},
	staging: {
		apiUrl: "http://localhost:9001/api",
	},
	prod: {
		apiUrl: "https://filmstudy-production.up.railway.app/api",
	},
};

const getCurrentSettings = () => {
	if (__DEV__) return settings.dev;
	if (Constants.manifest.releaseChannel === "staging") return settings.staging;
	return settings.prod;
};

export default getCurrentSettings();
