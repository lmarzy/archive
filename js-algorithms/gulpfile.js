'use strict';

var gulp            = require('gulp'),
    browserify      = require("browserify"),
    source          = require('vinyl-source-stream'); 


gulp.task('browserify', function() {

  return browserify('./src/browserify/index.js', { debug: true })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dev/'))
  
});

gulp.task('view', function() {
   
   return gulp.src('./src/index.html')
   .pipe(gulp.dest('dev/'))
    
});

gulp.task('default', ['view', 'browserify'], function() {
});
