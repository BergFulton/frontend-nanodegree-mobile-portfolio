//Gulp File. Hopefully. 

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css'),
	watch = require('watch'),
	htmlMin = require('gulp-htmlmin'),
	imageMin = require('gulp-imagemin'),
	imageResize = require('gulp-gm');
	

gulp.task('default', function(){
	console.log('Running default task!');
});

gulp.task('scripts', function(){
	gulp.src(['views/js/main.js'])
		.pipe(uglify())
        .pipe(rename('main.min.js'))
		.pipe(gulp.dest('views/js/'));
});

gulp.task('styles', function(){
	gulp.src(['views/css/style.css'])
		.pipe(cleanCSS())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('views/css/'));
});

gulp.task('images', function() {
	gulp.src('views/images/pizzeria.jpg')
		.pipe(imageMin({
			progressive: true
		}))
		.pipe(imageResize(function (gmfile) {
 
      		return gmfile.resize(100, 100);
 
    	}))
		.pipe(gulp.dest('views/dist/images'));
	gulp.src('img/*')
		.pipe(imageMin({
			progressive: true
		}))
		.pipe(gulp.dest('dist/img'));
})

gulp.task('watch', function(){
	gulp.watch('views/js/**/*.js', ['scripts']);
	gulp.watch('views/css/**/*.css', ['styles']);
})


gulp.task('default', ['scripts', 'styles', 'images', 'watch']);
