// TASK - INJECT

'use strict';

var gulp 					= require('gulp'),
		$ 						= require('gulp-load-plugins')(),
		config 				= require('../config/inject.json'),
		browserSync 	= require('browser-sync'),
		reload 				= browserSync.reload,
		isProduction 	= false;

gulp.task(config.taskName, function() {

  return gulp.src(config.dirs.src)
  .pipe($.inject(gulp.src(config.inject.cssJs, {read: false}), {relative: true}))
  .pipe(gulp.dest(config.dirs.dest))
  .pipe(reload({stream:true}));

});

gulp.task(config.taskNameWatch, ['swig'], function() {

  return gulp.src(config.dirs.src)
  .pipe($.inject(gulp.src(config.inject.cssJs, {read: false}), {relative: true}))
  .pipe(gulp.dest(config.dirs.dest))
  .pipe(reload({stream:true}));

});