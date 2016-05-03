// TASK - YSLOW

'use strict';

var gulp 				= require('gulp'),
		exec 				= require('child_process').exec,
		config			= require('../config/yslow.json');

gulp.task(config.taskName, function (cb) {
  exec(config.exec, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});