var gulp       = require('gulp');
var jshint     = require('gulp-jshint');
var uglify     = require('gulp-uglify');
var concat     = require('gulp-concat');
var usemin     = require('gulp-usemin');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var rimraf      = require('rimraf');
var browserify = require('browserify');
var ngAnnotate = require('gulp-ng-annotate');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss  = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var browserSync = require('browser-sync');
var karma      = require('gulp-karma');
var rev         = require('gulp-rev');
var babelify = require('babelify');

var config = {
    app: 'app'
};

// Styles
// ----------------------------------------
gulp.task('styles',['clean'], function() {
    return gulp.src('app/styles/**/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/styles'));
});

// Linting
// ----------------------------------------
gulp.task('lint', ['styles'], function () {
    return gulp.src(['app/scripts/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// BrowserSync
// ----------------------------------------
gulp.task('browserSync', function () {
    browserSync({
        port: 8080,
        server: {
            baseDir: 'dist'
        }
    });
});

// Clean
// ----------------------------------------
gulp.task('clean', function (cb) {
    rimraf('./dist',cb);
});

// 
// ----------------------------------------
gulp.task('usemin', ['clean', 'styles'], function () {
    return gulp.src('./app/*.html')
        .pipe(usemin({
            html: [minifyHtml()],
            css: [minifyCss()],
            js: [ /*uglify,*/ rev() ]
        }))
        .pipe(gulp.dest('./dist'));
});

// Pipeline - styles, lint, browserify
// ----------------------------------------
gulp.task('pipeline', ['usemin'], function () {
    
    gulp.src(['./app/views/**', './app/styles/font/**', './app/images/**'], {base: './app'})
        .pipe(gulp.dest('dist'));

    return browserify('./app/scripts/init.js')
        .transform(babelify)
        .bundle()
        .on('error', function (err) {
            console.log(err);
        })
        .pipe(source('bundle.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));
});

// Test
// ----------------------------------------
gulp.task('test', function() {
    return gulp.src('./tests')
        .pipe(karma({
            configFile: 'test/karma.conf.js',
            action: 'watch'
        })).on('error', function(err) {
            this.emit('end'); //instead of erroring the stream, end it
        });
});

// -------------------------------------------------
// Watchers
// -------------------------------------------------
gulp.task('watch'/*, ['browserSync']*/, function() {
    gulp.watch([
        'app/scripts/**/*.js',
        'app/styles/**/*.scss',
        'app/**/*.html'
    ], ['pipeline']);
});

