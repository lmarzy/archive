// TASK -  BUILD

'use strict';

var gulp            = require('gulp'),
    runSequence     = require('run-sequence'),
    config          = require('./config.js').build;

gulp.task('default', function(cb) {
  runSequence(config.clean, config.initial, config.tasks, config.end, cb);
});
