var gulp = require('gulp'),
    minifyCSS = require('gulp-clean-css'),
    minifyHTML = require('gulp-minify-html');
gulp.task('minifyCSS', function () {
    gulp.src('./css/index.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./docs/css/'));
});
gulp.task('minifyHTML', function () {
    gulp.src('./index.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('./docs/'));
});
gulp.task('default', ['minifyCSS', 'minifyHTML']);