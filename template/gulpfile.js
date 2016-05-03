/**

* Starter Template

* Plugins

* gulp - gulp tool
* gulp-load-plugins - looks at package.json and includes all dependencies instead of requiring them all individually
* gulp-rimraf - removing directories/files

//html 
* gulp-swig - html templating to convert swig files to html
* gulp-minify-html - html minification

//css
* gulp-ruby-sass - compile Sass to css
* gulp-autoprefixer - prefix css
* gulp-cssmin - css minification
* gulp-uncss - remove any unused css

//js
* gulp-jshint - js error checking
* gulp-uglify - js minification

//prod
* gulp-useref - file concatenation and rename
* gulp-if - conditionally run tasks
* gulp-rev - static asset revisioning
* gulp-rev-replace - rewrite occurences of filenames which have been renamed by gulp-rev

//utilities
* gulp-cache - cache proxy task for Gulp
* gulp-size - shows size of files

//non gulp
* jshint-stylish - formats the output of jshint to make it pretty
* browser-sync

//deploy
* gulp-gh-pages - deploy to github pages

* Tasks

* Clean 				- del
* Swig 					- gulp-swig
* sass 					- gulp-ruby-sass
* js 						- copy js assets
* cssAssets 		- copy over css assets directory
* images 				- copy over images
* prodHtml 			- gulp-useref, gulp-rev, gulp-rev-replace
* prodCssAssete - gulp-imagemin
* prodImages 		- gulp-imagemin
* prodMisc 			- copies over any other files such as robots, humans, etc..
* serve:dev 		- runs the dev tasks and sets up web server and watch
* dev 					- loads all the dev tasks
* prod 					- loads all the prod tasks
* deploy 				- gulp-gh-pages

**/

'use strict';

// Imclude Gulp & Tools
var gulp 					= require('gulp'),
		$ 						= require('gulp-load-plugins')(),
		del 					= require('del'),
		runSequence 	= require('run-sequence'),
		browserSync 	= require('browser-sync'),
		reload 				= browserSync.reload,
		dir,
		config,
		autoprefixerBrowsers;

// directories
dir = {
	src: 'src',
	dev: 'dev',
	prod: 'dist',
	sassCache: '.sass-cache'
};

// config 
config = {

	src: {
		html: {
			files: dir.src + '/templates/pages/*.swig',
			watch: dir.src + '/templates/**/*.swig'
		},
		json: {
			watch: dir.src + '/templates/pages/*.json'
		},
		scss: {
			root: dir.src + '/scss',
			files: dir.src + '/scss/app.scss',
			assets: dir.src + '/scss/assets/**/*.*',
			watch: dir.src + '/scss/**/*.scss'
		},
		js: {
			files: dir.src + '/js/**/*.js',
			watch: dir.src + '/js/**/*.js'
		},
		images: dir.src + '/img/**/*.*',
		misc: dir.src + '/misc/*.*'
	},
	//end src

	dev: {
		html: dir.dev + '/*.html',
		cssAssets: dir.dev + '/css/assets/**/*.*',
		images: dir.dev + '/img/**/*.*'
	},
	//end dev

	dest: {
		dev: {
			html: dir.dev,
			css: dir.dev + '/css/',
			cssAssets: dir.dev + '/css/assets/',
			js: dir.dev + '/js/',
			images: dir.dev + '/img/',
		},
		prod: {
			root: dir.prod,
			cssAssets: dir.prod + '/css/assets/',
			images: dir.prod + '/img/'
		}
	},
	//end dest

	deploy: {
		site: dir.prod + '/**/*'
	}

}//end config

// Autoprefixer array
autoprefixerBrowsers = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

/* ---------------------------------------- TASKS FOR DEV ---------------------------------------- */

// Task Clean

gulp.task('clean', function (cb) {
  del([dir.sassCache, dir.dev, dir.prod], cb);
});


// Task Swig

gulp.task('swig', function() {

	var opts = {
		load_json: true,
		defaults: { cache: false },
		data: require('./src/templates/pages/global')
	};

	return gulp.src(config.src.html.files)
	.pipe($.swig(opts))
	.pipe(gulp.dest(config.dest.dev.html))
	.pipe($.size({title: 'swig'}))
	.pipe(reload({stream:true}));

});

// Task Sass

gulp.task('sass', function() {

	return gulp.src(config.src.scss.files)
	.pipe($.rubySass({sourcemap: true}))
	.pipe($.autoprefixer(autoprefixerBrowsers))
	.pipe(gulp.dest(config.dest.dev.css))
	.pipe($.size({title: 'sass'}))
	.pipe(reload({stream:true}));

});

// Task JS

gulp.task('copy:js', function() {

	return gulp.src(config.src.js.files)
	.pipe($.jshint())
  .pipe($.jshint.reporter('jshint-stylish'))
	.pipe(gulp.dest(config.dest.dev.js))
	.pipe($.size({title: 'js'}))
	.pipe(reload({stream:true}));

});

// Task copy css images

gulp.task('copy:cssAssets', function() {

	return gulp.src(config.src.scss.assets)
	.pipe(gulp.dest(config.dest.dev.cssAssets))
	.pipe($.size({title: 'css-assets'}));

});

// Task copy images

gulp.task('copy:images', function() {

	return gulp.src(config.src.images)
	.pipe(gulp.dest(config.dest.dev.images))
	.pipe($.size({title: 'images'}));

});

/* ---------- Build Task For Dev ---------- */

// Serve Dev
gulp.task('serve:dev', ['dev'], function () {
  
  browserSync({
    notify: true,
    server: {
      baseDir: 'dev'
    }
  });
  
  gulp.watch(config.src.html.watch, ['swig']);
  gulp.watch(config.src.json.watch, ['swig']);
	gulp.watch(config.src.scss.watch, ['sass']);
	gulp.watch(config.src.js.watch, ['copy:js']);

});

// Build Dev

gulp.task('dev', ['clean'], function (cb) {
  runSequence('swig', 'sass', 'copy:js', 'copy:cssAssets', 'copy:images', cb);
});



/* ---------------------------------------- TASKS FOR PROD ---------------------------------------- */

// Task prod html

gulp.task('prodHtml', function() {

	var assets = $.useref.assets();

	return gulp.src('dev/*.html')
				 .pipe(assets)
				 .pipe($.if('*.css', $.cssmin({
            html: ['dev/index.html']
        	})))
				 .pipe($.if('*.css', $.cssmin()))
				 .pipe($.if('*.js', $.uglify()))
				 .pipe($.rev())
				 .pipe(assets.restore())
				 .pipe($.useref())
				 .pipe($.revReplace())
				 .pipe($.if('*.html', $.minifyHtml()))
				 .pipe(gulp.dest(config.dest.prod.root))
				 .pipe($.size({title: 'prod-html'}));

});

// Task prod css assets

gulp.task('prodCssAssets', function() {

	return gulp.src(config.dev.cssAssets)
				.pipe($.cache($.imagemin({
		      progressive: true,
		      interlaced: true
		    })))
				.pipe(gulp.dest(config.dest.prod.cssAssets))
				.pipe($.size({title: 'prod-css-assets'}));

});

// Task prod images

gulp.task('prodImages', function() {

	return gulp.src(config.dev.images)
				.pipe($.cache($.imagemin({
		      progressive: true,
		      interlaced: true
		    })))
				.pipe(gulp.dest(config.dest.prod.images))
				.pipe($.size({title: 'prod-images'}));

});

// Task copy misc

gulp.task('prodMisc', function() {

	return gulp.src(config.src.misc)
				.pipe(gulp.dest(config.dest.prod.root))

});


/* ---------- Build Task for Prod ---------- */

// Serve Prod

gulp.task('serve:prod', ['prod'], function () {
  browserSync({
    notify: true,
    server: {
      baseDir: 'dist'
    }
  });
});

// Build Prod

gulp.task('prod', ['dev'], function (cb) {
  runSequence('prodCssAssets', 'prodImages', 'prodMisc', ['prodHtml'], cb);
});


/** ---------- DEPLOY TASK - task to deploy to github pages ---------- **/

gulp.task('deploy', function () {
    return gulp.src(config.deploy.site)
          .pipe(deploy());
});




