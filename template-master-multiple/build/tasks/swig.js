// TASK - SWIG

'use strict';

var gulp 					= require('gulp'),
		gutil 				= require('gulp-util'),
		$ 						= require('gulp-load-plugins')(),
		config 				= require('../config/swig.json'),
		isProduction 	= false,
		opts,
		taskSwig;

if (gutil.env.prod === true) {
	isProduction = true;
}

opts = {
	load_json: true,
	defaults: { cache: false }
};

taskSwig = function(taskName, data, src, dest) {

	gulp.task(taskName, function() {

		opts.data = require(data);

		return gulp.src(src)
			.pipe($.swig(opts))
			.pipe(isProduction ? $.htmlmin({
				collapseWhitespace: true
			}) : gutil.noop())
			.pipe($.size())
			.pipe(gulp.dest(dest));

	});

}

for (var prop in config) {

	taskSwig(config[prop].taskName, config[prop].data, config[prop].dirs.src, config[prop].dirs.dest);

}