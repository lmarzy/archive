// TASK - JS

'use strict';

var gulp 					= require('gulp'),
		gutil 				= require('gulp-util'),
		$ 						= require('gulp-load-plugins')(),
		config 				= require('../config/img.json'),
		isProduction 	= false,
		taskImg;

if (gutil.env.prod === true) {
	isProduction = true;
}

taskImg = function(taskName, src, dest) {

	gulp.task(taskName, function() {

	return gulp.src(src)
		.pipe(isProduction ? $.imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}]
		}) : gutil.noop())
		.pipe($.size())
		.pipe(gulp.dest(dest));

	});

}

for (var prop in config) {

	taskImg(config[prop].taskName, config[prop].dirs.src, config[prop].dirs.dest);

}