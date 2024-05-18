import db from "../index.js";

const Movie = db.define("Movie", {
	id: {
		type: Datatypes.INTEGER,
		unique: true,
	},
});

export default Project;
