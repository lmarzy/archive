// TASK - COPY CSS ASSETS

'use strict';

var gulp 					= require('gulp'),
		gutil 				= require('gulp-util'),
		$ 						= require('gulp-load-plugins')(),
		config 				= require('../config/cssAssets.json'),
		isProduction 	= false;

if (gutil.env.prod === true) {
	isProduction = true;
}

gulp.task(config.taskName, function() {

	return gulp.src(config.dirs.src)
	.pipe(isProduction ? $.imagemin({
		progressive: true,
		svgoPlugins: [{removeViewBox: false}]
	}) : gutil.noop())
	.pipe(gulp.dest(config.dirs.dest));

});

