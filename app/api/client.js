import axios from "axios";
import settings from "../config/settings";

export default client = axios.create({
	baseURL: settings.apiUrl,
});
