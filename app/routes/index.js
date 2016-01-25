"use strict";

let path = process.cwd(),
	multer  = require("multer"),
	upload = multer({ dest: "/tmp" });


module.exports = (app) => {

	app.post("/api/filemetadata", upload.single("the-file"), function (req, res, next) {
		res.json({"file_size": req.file.size});
	});

	app.get("/", (req, res)  => {
		res.sendFile(path + "/public/index.html");
	});
};
