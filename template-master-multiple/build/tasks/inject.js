// TASK - INJECT

'use strict';

var gulp 					= require('gulp'),
		$ 						= require('gulp-load-plugins')(),
		config 				= require('../config/inject.json'),
		browserSync 	= require('browser-sync'),
		reload 				= browserSync.reload,
		isProduction 	= false,
		taskInject,
		taskInjectWatch;

taskInject = function(taskName, src, injectCssJs, dest) {

	gulp.task(taskName, function() {

	  return gulp.src(src)
	  .pipe($.inject(gulp.src(injectCssJs, {read: false}), {relative: true}))
	  .pipe(gulp.dest(dest))
	  .pipe(reload({stream:true}));

	});

}

taskInjectWatch = function(taskName, depd, src, injectCssJs, dest) {

	gulp.task(taskName, [depd], function() {

	  return gulp.src(src)
	  .pipe($.inject(gulp.src(injectCssJs, {read: false}), {relative: true}))
	  .pipe(gulp.dest(dest))
	  .pipe(reload({stream:true}));

	});

}

for (var prop in config) {

	taskInject(config[prop].taskName, config[prop].src, config[prop].inject.cssJs, config[prop].dest);

	taskInjectWatch(config[prop].taskNameWatch, config[prop].depd, config[prop].src, config[prop].inject.cssJs, config[prop].dest);

}

