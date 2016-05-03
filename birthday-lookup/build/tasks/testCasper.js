// TASK - TEST-CASPER

'use strict';

var gulp 					= require('gulp'),
		$ 						= require('gulp-load-plugins')(),
		casperJs 			= require('gulp-casperjs'),
		config 				= require('../config/testCasper.json');

gulp.task(config.taskName, function () {
	gulp.src(config.src)
  	.pipe(casperJs()); //run capserjs test.js 
});