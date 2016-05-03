// TASK - SASS

'use strict';

var gulp 					= require('gulp'),
		gutil 				= require('gulp-util'),
		$ 						= require('gulp-load-plugins')(),
		glob 					= require('glob'),
		config 				= require('../config/sass.json'),
		autoprefixer  = require('../autoprefixerBrowsers.js').browsers,
		browserSync 	= require('browser-sync'),
		reload 				= browserSync.reload,
		isProduction 	= false,
		taskSass;

if (gutil.env.prod === true) {
	isProduction = true;
}

taskSass = function(taskName, src, dest) {

	gulp.task(taskName, function() {

		return gulp.src(src)
		.pipe($.sass())
		.pipe(isProduction ? $.uncss({
			html: glob.sync('dist/*.html'),
			ignore: ['']
		}) : gutil.noop())
		.pipe($.autoprefixer({
			browsers: autoprefixer.browsers
		}))
		.pipe(isProduction ? $.minifyCss() : gutil.noop())
		.pipe(isProduction ? $.rev(): gutil.noop())
		.pipe($.size())
		.pipe(gulp.dest(dest))
		.pipe(reload({stream:true}));

	});

}

for (var prop in config) {

	taskSass(config[prop].taskName, config[prop].dirs.src, config[prop].dirs.dest);

}