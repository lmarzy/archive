// TASK - COPY

'use strict';

var gulp = require('gulp');

gulp.task('copy:data', function () {
	  gulp.src('./src/dash/data/**')
	    .pipe(gulp.dest('dist/dash/data/'));
});