// TASK - CLEAN

'use strict';

var gulp 		= require('gulp'),
		del 		= require('del'),
		config 	= require('../config/clean.json'),
		taskClean;

taskClean = function(taskName, filesDirs) {

	gulp.task(taskName, function (cb) {
	  del(filesDirs, cb);
	});

}

for (var prop in config) {

	taskClean(config[prop].taskName, config[prop].filesDirs);

}