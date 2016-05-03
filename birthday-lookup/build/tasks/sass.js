// TASK - SASS

'use strict';

var gulp 					= require('gulp'),
		gutil 				= require('gulp-util'),
		$ 						= require('gulp-load-plugins')(),
		glob 					= require('glob'),
		config 				= require('../config/sass.json'),
		browserSync 	= require('browser-sync'),
		reload 				= browserSync.reload,
		isProduction 	= false;

if (gutil.env.prod === true) {
	isProduction = true;
}

gulp.task(config.taskName, function() {

	return gulp.src(config.dirs.src)
	.pipe(isProduction ? gutil.noop() : $.sourcemaps.init())
    .pipe($.sass())
    .pipe(isProduction ? $.uncss({
			html: glob.sync('dist/*.html'),
			ignore: ['']
		}) : gutil.noop())
		.pipe($.autoprefixer({
			browsers: config.autoprefixerBrowsers
		}))
  .pipe(isProduction ? gutil.noop() : $.sourcemaps.write('./'))
	.pipe(isProduction ? $.minifyCss() : gutil.noop())
	.pipe(isProduction ? $.rev(): gutil.noop())
	.pipe($.size())
	.pipe(gulp.dest(config.dirs.dest))
	.pipe(reload({stream:true}));

});