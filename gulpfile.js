const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function buildStyles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/styles'));
}

function imageMin() {
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function distVideo() {
    return gulp.src('./src/video/*')
    .pipe(gulp.dest('./dist/video'));
}

exports.default = gulp.parallel(buildStyles, imageMin, distVideo);
exports.watch = function() {
    gulp.watch('./src/**/styles/*.scss', gulp.series(buildStyles));
}