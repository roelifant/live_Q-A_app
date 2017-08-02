const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
  return gulp.src('./public/dist/stylesheets/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/dist/stylesheets'));
});

gulp.task('default', ['minify-css']);