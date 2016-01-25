"use strict";

let path = process.cwd();


module.exports = (app) => {

	app.get("/", (req, res)  => {
		res.sendFile(path + "/public/index.html");
	});
};
