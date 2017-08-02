const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concatCSS = require('gulp-concat-css');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const imagemin = require('gulp-imagemin');

gulp.task('sass', function() {
    return gulp.src('./public/src/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/dist/stylesheets'));
});

/*gulp.task('minify-css', ['sass'],function() {
  return gulp.src('./public/dist/stylesheets/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/dist/stylesheets'));
});*/

gulp.task('minify-css', function() { //concatCSS lijkt me hier echter overbodig omdat sass al de juiste css componenten samen gooit in de juiste bestanden
 gulp.src('./public/dist/stylesheets/*.css')
 .pipe(concatCSS('build.css'))
 .pipe(cleanCSS({compatibility: 'ie8'}))
 .pipe(gulp.dest('./public/dist/stylesheets'))
});

gulp.task('scripts', function() {
  return gulp.src('./public/src/scripts/*.js')
    .pipe(concat('build.js'))
    .pipe(gulp.dest('./public/dist/scripts'));
});

gulp.task('minify-js',['scripts'], function() {
  gulp.src('./public/dist/scripts/build.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'-min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./public/dist/scripts'))
});

gulp.task('imagemin', () =>
    gulp.src('./public/src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/dist/images'))
);

gulp.task('default', ['sass', 'minify-css', 'scripts', 'minify-js', 'imagemin']);