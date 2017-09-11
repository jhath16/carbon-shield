let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');

const SCSS_PATH = './src/scss/main.scss';

gulp.task('sass', function () {
  return gulp.src(SCSS_PATH)
          .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
          .pipe(rename('main.min.css'))
          .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(SCSS_PATH, ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
