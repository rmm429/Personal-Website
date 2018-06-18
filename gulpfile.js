const gulp = require('gulp')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const minifyJS = require('gulp-js-minify')
const browserSync = require('browser-sync').create()

const cssSrc = 'src/*.css'
const jsSrc = "src/*.js"

gulp.task('sass', () => {
  return gulp.src(cssSrc)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'))
})

gulp.task('minify', function(){
  gulp.src(jsSrc)
    .pipe(minifyJS())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['sass', 'minify'])

gulp.task('watch', ['build'], () => {
  browserSync.init({
    files: "./index.html",
    server: {
      baseDir: './',
      open: 'external',
      port: 3000,
    }
  })
  gulp.watch(cssSrc, ['sass'])
  gulp.watch(jsSrc, ['minify'])
})

gulp.task('default', ['watch'])
