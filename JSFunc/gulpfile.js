/*
npm i -D del gulp gulp-autoprefixer gulp-csso gulp-htmlmin gulp-uglify run-sequence
*/

const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');

const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify-es').default;

const BROWSERS = [
  'ie >= 10',
  'chrome >= 34',
  'ff >= 30'
];

gulp.task('styles', function() {
  return gulp.src('./styles.css')
    .pipe(autoprefixer({ browsers: BROWSERS }))
    .pipe(csso())
    .pipe(gulp.dest('./dist'));
});

gulp.task('scripts', function() {
  return gulp.src('./scripts.js')
    .pipe(uglify({
      mangle: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('html', function() {
  return gulp.src('./index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('default', ['clean'], function() {
  runSequence(
    'styles',
    'scripts',
    'html'
  );
})