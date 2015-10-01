var gulp = require('gulp'),
    server = require('gulp-express'),
    buildConfig = require('./config/build.config'),
    concat = require('gulp-concat'),
    footer = require('gulp-footer'),
    header = require('gulp-header'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');


gulp.task('server', ['build'], function () {
    return server.run(['server.js']);
});

gulp.task('build', function () {
    return gulp.src(buildConfig.appFiles)
    .pipe(concat('application.js'))
        .pipe(header(buildConfig.closureStart))
        .pipe(footer(buildConfig.closureEnd))
        .pipe(header(buildConfig.banner))
        .pipe(gulp.dest(buildConfig.dist))
        .pipe(uglify())
        .pipe(header(buildConfig.banner))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest(buildConfig.dist));
});
gulp.task('default', ['server']);