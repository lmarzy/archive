// TASK -  BUILD

'use strict';

var gulp 					= require('gulp'),
		runSequence 	= require('run-sequence'),
		config				= require('../config/build.json');

gulp.task(config.taskName, function(cb) {
  runSequence(config.initial, config.swig, config.tasks, config.end, cb);
});
