var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var gls = require('gulp-live-server');
 
// gulp.task('serve', function() {
//   //2. serve at custom port
//   var server = gls.static('./', 3030);
//   // var server = gls('./', true, 3030);
//   server.start();

//   //use gulp.watch to trigger server actions(notify, start or stop)
//   gulp.watch(['./src/*.scss', './index.html', './src/images/***'], ['sass'], function (file) {
//     server.notify.apply(server, [file]);
//   });
// });

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch("./src/*.scss", ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("./src/*.scss")
  .pipe(sass())
  .pipe(gulp.dest("./dist"))
  .pipe(browserSync.stream());
});

gulp.task('default', ['serve'])














