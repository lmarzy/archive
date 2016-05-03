// TASK - SASS

'use strict';

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    sass            = require('gulp-sass'),
    uncss           = require('gulp-uncss'),
    autoprefixer    = require('gulp-autoprefixer'),
    sourcemaps      = require('gulp-sourcemaps'),
    rev             = require('gulp-rev'),
    size            = require('gulp-size'),
    imagemin        = require('gulp-imagemin'),
    plumber         = require('gulp-plumber'),
    glob            = require('glob'),
    config          = require('./config.js').sass,
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    isProduction    = false,
    onError;

onError = function (err) {  
    gutil.log(gutil.colors.red(err.message));
    this.emit('end');
};

if (gutil.env.prod === true) {
    isProduction = true;
}

gulp.task('sass', function() {

    return gulp.src(config.src)
    .pipe(plumber(onError))
    .pipe(isProduction ? gutil.noop() : sourcemaps.init())
    .pipe(sass())
    .pipe(isProduction ? uncss({
            html: glob.sync('dist/*.html'),
            ignore: ['']
        }) : gutil.noop())
    .pipe(autoprefixer({browsers: config.autoprefixerBrowsers}))
    .pipe(isProduction ? gutil.noop() : sourcemaps.write('./maps'))
    .pipe(isProduction ? csso() : gutil.noop())
    .pipe(isProduction ? rev(): gutil.noop())
    .pipe(size())
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}));

});

gulp.task('css:assets', function() {

    return gulp.src(config.assets.src)
    .pipe(isProduction ? imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}]
    }) : gutil.noop())
    .pipe(gulp.dest(config.assets.dest));

});