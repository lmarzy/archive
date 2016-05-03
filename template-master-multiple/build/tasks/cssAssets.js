// TASK - COPY CSS ASSETS

'use strict';

var gulp 					= require('gulp'),
		gutil 				= require('gulp-util'),
		$ 						= require('gulp-load-plugins')(),
		config 				= require('../config/cssAssets.json'),
		isProduction 	= false,
		taskCssAssets;

if (gutil.env.prod === true) {
	isProduction = true;
}

taskCssAssets = function(taskName, src, dest) {

	gulp.task(taskName, function() {

		return gulp.src(src)
		.pipe(isProduction ? $.imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}]
		}) : gutil.noop())
		.pipe(gulp.dest(dest));

	});

}

for (var prop in config) {

	taskCssAssets(config[prop].taskName, config[prop].dirs.src, config[prop].dirs.dest);

}