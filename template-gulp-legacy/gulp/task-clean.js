// TASK - CLEAN

'use strict';

var gulp    = require('gulp'),
    del     = require('del'),
    config  = require('./config.js').clean;

gulp.task('clean', function () {
  	del(config.dest);
});