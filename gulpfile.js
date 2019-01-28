var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant'); // $ npm i -D imagemin-pngquant
var cache = require('gulp-cache');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');

// compile sass to css
gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Sass error: <%= error.message %>")}))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ // make sure we add vendor prefixes!
      browsers: ['last 2 versions']
    }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist'));
});

// minify images (lossless) automatically!
gulp.task('imagemin', function() {
  return gulp.src('./img/*')
    // .pipe(imagemin({
    .pipe(cache(imagemin({ // can cache to prevent re-minification every time gulp is run (though it is sometimes buggy)
      progressive: true,
      use: [pngquant()]
    // }))
    })))
    .pipe(gulp.dest('./dist/img'));
});

// watch our files for changes
gulp.task('watch', function () {
  gulp.watch('./views/**/*.jade', ['jade']);
  gulp.watch('./css/*.scss', ['sass']);
  gulp.watch('./img/*', ['imagemin']);
  gulp.watch('./coffee/*', ['coffee']);
});

// simply copy files in our lib folder to our output folder
gulp.task('copy-lib', function() {
  gulp.src('./lib/js/*.js')
    .pipe(gulp.dest('./dist'));
  gulp.src('./lib/css/*.css')
    .pipe(gulp.dest('./dist'));
});

// deploy to github pages automatically
gulp.task('deploy', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      branch: "master" // deploy branch needs to be master, since this is a Github user site, not a project site
    }));
});


// group together all the relevant 'build' tasks for our convenience
gulp.task('build', ['sass', 'imagemin', 'copy-lib']);

// by default, build everything, start the webserver, and watch our files for changes
gulp.task('default', ['build', 'watch']);

