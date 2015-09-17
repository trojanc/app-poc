var gulp = require('gulp'),
    babel = require('gulp-babel');
    server = require('gulp-express');
    
    
gulp.task('transpile', function() {
  return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'));
});

gulp.task('server', function () {
    return server.run(['server.js']);
});

gulp.task('default', ['transpile', 'server']);