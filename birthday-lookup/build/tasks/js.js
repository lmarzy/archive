// TASK - JS

'use strict';

var gulp 					= require('gulp'),
		gutil 				= require('gulp-util'),
		$ 						= require('gulp-load-plugins')(),
		browserify 		= require('browserify'),
		source 				= require('vinyl-source-stream'),
		glob 					= require('glob'),
		config 				= require('../config/js.json'),
		browserSync 	= require('browser-sync'),
		reload 				= browserSync.reload,
		isProduction 	= false;

if (gutil.env.prod === true) {
	isProduction = true;
}

gulp.task(config.taskName, function() {

	return browserify(config.dirs.src, { debug: true })
	.bundle()
	.pipe(source('bundle.js'))
	.pipe($.streamify($.jshint()))
	.pipe($.streamify($.jshint.reporter('jshint-stylish')))
	.pipe(isProduction ? $.streamify($.uglify()) : gutil.noop())
	.pipe(isProduction ? $.streamify($.rev()) : gutil.noop())
	.pipe(gulp.dest(config.dirs.dest))
	.pipe(reload({stream:true}));

});