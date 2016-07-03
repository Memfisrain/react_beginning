"use strict";

var gulp = require("gulp"),
	connect = require("gulp-connect"),
	open = require("gulp-open");

var browserify = require("browserify"), // Bundles JS
	reactify = require("reactify"), // Transform JSX to JS
	source = require("vinyl-source-stream"); // Use conventional text stream with GUlp

var concat = require("gulp-concat"); // concatenate css
var eslint = require("gulp-eslint"); //Lint javascript code



var config = {
	port: 9005,
	devBaseUrl: "http://localhost",
	paths: {
		html: "./src/*.html",
		js: "./src/**/*.js",
		images: "./src/images/*",
		css: [
			"node_modules/bootstrap/dist/css/bootstrap.min.css",
			"node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
			"node_modules/toastr/package/toastr.css"
		],
		dist: "./dist",
		mainJs: "./src/main.js"
	}
};


gulp.task("connect", function() {
	connect.server({
		root: ["dist"],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	})
});


gulp.task("open", ["connect"], function() {
	gulp.src("dist/index.html")
		.pipe(open({ uri: config.devBaseUrl + ":" + config.port + "/"}))
});

gulp.task("html", function() {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task("js", function() {
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on("error", console.error.bind(console))
		.pipe(source("bundle.js"))
		.pipe(gulp.dest(config.paths.dist + "/scripts"))
		.pipe(connect.reload());
});

gulp.task("css", function() {
	gulp.src(config.paths.css)
		.pipe(concat("bundle.css"))
		.pipe(gulp.dest(config.paths.dist + "/css"))
});

gulp.task("images", function() {
	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + "/images"))
		.pipe(connect.reload())
});

gulp.task("lint", function() {
	return gulp.src(config.paths.js)
		.pipe(eslint({config: "eslint.config.json"}))
		.pipe(eslint.format());
	})


gulp.task("watch", function() {
	gulp.watch(config.paths.html, ["html"]);
	gulp.watch(config.paths.js, ["js", "lint"]); // where 'js' is the name of the task, mentioned above;
	gulp.watch(config.paths.css, ["css"]); // where 'js' is the name of the task, mentioned above;
});


gulp.task("default", ["html", "js", "css", "images", "lint", "open", "watch"])