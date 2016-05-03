// TASK - JS

'use strict';

var gulp 					= require('gulp'),
		gutil 				= require('gulp-util'),
		$ 						= require('gulp-load-plugins')(),
		browserify 		= require('browserify'),
		source 					= require('vinyl-source-stream'),
		glob 					= require('glob'),
		config 				= require('../config/js.json'),
		browserSync 	= require('browser-sync'),
		reload 				= browserSync.reload,
		isProduction 	= false,
		taskJs;

if (gutil.env.prod === true) {
	isProduction = true;
}

taskJs = function(taskName, src, dest) {

	gulp.task(taskName, function() {

		return browserify(src, { debug: true })
		.bundle()
		.pipe(source('bundle.js'))
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'))
		.pipe(isProduction ? $.streamify($.uglify()) : gutil.noop())
		.pipe(isProduction ? $.streamify($.rev()) : gutil.noop())
		.pipe(gulp.dest(dest))
		.pipe(reload({stream:true}));

	});

}

for (var prop in config) {

	taskJs(config[prop].taskName, config[prop].dirs.src, config[prop].dirs.dest);

}