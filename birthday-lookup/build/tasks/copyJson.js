// TASK - COPY JSON

'use strict';

var gulp 					= require('gulp'),
		gutil 				= require('gulp-util'),
		$ 						= require('gulp-load-plugins')(),
		config 				= require('../config/copyJson.json');

gulp.task(config.taskName, function() {

	return gulp.src(config.dirs.src)
	.pipe(gulp.dest(config.dirs.dest));

});