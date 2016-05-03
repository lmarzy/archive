// TASK - SWIG

'use strict';

var gulp 					= require('gulp'),
		gutil 				= require('gulp-util'),
		$ 						= require('gulp-load-plugins')(),
		config 				= require('../config/swig.json'),
		isProduction 	= false,
		opts;

if (gutil.env.prod === true) {
	isProduction = true;
}

opts = {
	load_json: true,
	defaults: { cache: false },
	data: require(config.data)
};

gulp.task(config.taskName, function() {

	return gulp.src(config.dirs.src)
		.pipe($.swig(opts))
		.pipe(isProduction ? $.htmlmin({
			collapseWhitespace: true
		}) : gutil.noop())
		.pipe($.size())
		.pipe(gulp.dest(config.dirs.dest));

});