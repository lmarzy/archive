// TASK -  BUILD

'use strict';

var gulp 					= require('gulp'),
		runSequence 	= require('run-sequence'),
		config				= require('../config/build.json'),
		build,
		buildAll;

build = function(taskName, initial, swig, tasks, end) {

	gulp.task(taskName, function(cb) {
	  runSequence(initial, swig, tasks, end, cb);
	});

}

for (var prop in config) {

	build(config[prop].taskName, config[prop].initial, config[prop].swig, config[prop].tasks, config[prop].end);

}

gulp.task('build:all', function(cb) {
  runSequence('build:dash', cb);
});