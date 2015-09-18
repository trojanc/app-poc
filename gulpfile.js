var gulp = require('gulp'),
    server = require('gulp-express');
    


gulp.task('server', function () {
    return server.run(['server.js']);
});

gulp.task('default', ['server']);