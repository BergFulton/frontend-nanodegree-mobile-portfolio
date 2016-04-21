//Gulp File. Hopefully. 

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css'),
	watch = require('watch'),
	stylus = require('gulp-stylus');

gulp.task('default', function(){
	console.log('Hello World');
});

gulp.task('scripts', function(){
	gulp.src(['js/app.js'])
		.pipe(uglify())
        .pipe(rename('app.min.js'))
		.pipe(gulp.dest('js/'));
});

gulp.task('styles', function(){
	gulp.src('css/**/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('minCSS'));
	gulp.src('styl/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('css/'))
});

gulp.task('watch', function(){
	gulp.watch('js/**/*.js', ['scripts']);
	gulp.watch('css/**/*.css', ['styles']);
	gulp.watch('styl/**/*.styl', ['styles']);
})


gulp.task('default', ['scripts', 'styles', 'watch']);
