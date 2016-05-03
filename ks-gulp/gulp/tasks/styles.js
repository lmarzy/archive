// TASK - STYLES - CONVERT SCSS FILES TO CSS

'use strict';

var gulp                = require('gulp'),
    gutil               = require('gulp-util'),
    plumber             = require('gulp-plumber'),
    sass                = require('gulp-sass'),
    postcss             = require('gulp-postcss'),
    uncss               = require('gulp-uncss'),
    reporter            = require('postcss-reporter'),
    stylelint           = require('stylelint'),
    stylintConfig       = require('stylelint-config-standard'),
    syntax_scss         = require('postcss-scss'),
    glob                = require('glob'),
    sourcemaps          = require('gulp-sourcemaps'),
    configTask          = require('../config/styles'),
    configGlobal        = require('../config/_global'),
    browserSync         = require('browser-sync'),
    reload              = browserSync.reload,
    processorsCombined;

processorsCombined = configTask.processorsDev.concat(configTask.processorsProd);

gulp.task("lint:css", function () {
  return gulp.src('./src/styles/g-components/**/*.scss')
    .pipe(postcss([
      stylelint(stylintConfig),
      reporter({ clearMessages: true })
    ], {
      syntax: syntax_scss
    }))
})

gulp.task('styles', ["lint:css"], function() {
  return gulp.src(configTask.src)
    .pipe(plumber(configGlobal.onError))
    .pipe(configGlobal.isProduction ? gutil.noop() : sourcemaps.init())
    .pipe(sass())
    .pipe(configGlobal.isProduction ? postcss(processorsCombined) : postcss(configTask.processorsDev))
    // .pipe(configGlobal.isProduction ? uncss({html: glob.sync(configTask.uncssGlob), ignore: configTask.uncssIgnore}) : gutil.noop())
    .pipe(configGlobal.isProduction ? gutil.noop() : sourcemaps.write(configTask.mapWrite))
    .pipe(gulp.dest(configTask.dest))
    .pipe(reload({stream:true}))
});
