/**
 * Main gulp file
 *
 * @author Simon Davies
 */
 var gulp       = require('gulp'),
   rename       = require('gulp-rename'),
   sass         = require('gulp-sass'),
   autoprefixer = require('gulp-autoprefixer'),
   del          = require('del'),
   uglify       = require('gulp-uglify'),
   minifyCSS    = require('gulp-minify-css'),
   browserify    = require('browserify'),
   babelify    = require('babelify'),
   gutil = require('gulp-util'),
   source = require('vinyl-source-stream');

/**
 * CSS Tasks
 */
gulp.task('sass', function() {
    return gulp.src('resources/sass/app.scss')
        .pipe(sass({ style: 'compressed', sourcemap: true }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('app/css'));
});

/**
 * ES^ task
 */
 gulp.task('es6', function() {
 	browserify({
     	entries: './resources/js/loader.js',
     	debug: true
   	})
     .transform(babelify)
     .on('error',gutil.log)
     .bundle()
     .on('error',gutil.log)
     .pipe(source('./app/js/main.js'))
     .pipe(gulp.dest(''));
 });

/**
 * Clean some files before running the tasks
 */
gulp.task('clean', function(){
  del(['app/css/**/*']);
});

/**
 * Thw gulp watch file
 */
gulp.task('watch', function() {
  gulp.watch('resources/sass/partials/*.scss', ['sass']);
  gulp.watch('resources/js/pages/*.js', ['es6']);
});
/**
 * Default config
 */
gulp.task('default', ['clean'], function(){
  gulp.start('sass','es6', 'watch');
});
