// TASK - TEST-CASPER

'use strict';

var gulp 					= require('gulp'),
		$ 						= require('gulp-load-plugins')(),
		casperJs 			= require('gulp-casperjs'),
		config 				= require('../config/testCasper.json'),
		taskCasper;


taskCasper = function(taskName, src) {

	gulp.task(taskName, function () {
		  gulp.src(src)
		    .pipe(casperJs()); //run capserjs test.js 
	});

}

for (var prop in config) {

	taskCasper(config[prop].taskName, config[prop].src);

}