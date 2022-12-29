const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/styles'));
}

exports.default = gulp.series(buildStyles);
exports.watch = function() {
    gulp.watch('./src/**/styles/*.scss', gulp.series(buildStyles));
}