// TASK - CLEAN

'use strict';

var gulp 		= require('gulp'),
		del 		= require('del'),
		config 	= require('../config/clean.json');

gulp.task(config.taskName, function (cb) {
  del(config.dest, cb);
});