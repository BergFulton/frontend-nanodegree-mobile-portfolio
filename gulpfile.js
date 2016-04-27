//Gulp File. Runs a bunch of gulp tasks. Hopefully. 

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css'),
	watch = require('watch'),
	htmlMin = require('gulp-htmlmin'),
	imageMin = require('gulp-imagemin'),
	imageResize = require('gulp-gm');
	critical = require('critical');
	
gulp.task('default', function(){
	console.log('Running default task!');
});

// Make your code ugly and put it in a dist folder.
gulp.task('scripts', function(){
	gulp.src(['views/js/main.js'])
		.pipe(uglify())
        .pipe(rename('main.min.js'))
		.pipe(gulp.dest('views/js/'));
});

// Cleans CSS
gulp.task('styles', function(){
	gulp.src(['views/css/style.css'])
		.pipe(cleanCSS())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('views/css/'));
});

// Image resizing and optimizing. Vastly improves perf!
gulp.task('images', function() {
	gulp.src('views/images/pizzeria.jpg')
		.pipe(imageMin({
			progressive: true
		}))
		.pipe(imageResize(function (gmfile) {
 
      		return gmfile.resize(100, 100);
 
    	}))
    	// Puts those images in a dist folder
		.pipe(gulp.dest('views/dist/images'));
	gulp.src('img/*')
		.pipe(imageMin({
			progressive: true
		}))
		.pipe(gulp.dest('dist/img'));
});

// Watch task lets you know that stuff is changing-good for bug dx!
gulp.task('watch', function(){
	gulp.watch('views/js/**/*.js', ['scripts']);
	gulp.watch('views/css/**/*.css', ['styles']);
});

// Critical mashes CSS & HTML together & generates index-critical.html
// This is a powerful task, use w. caution, but can SERIOUSLY raise perf
gulp.task('critical', function (cb) {
    critical.generate({
        inline: true,
        src: 'index.html',
        dest: 'index-critical.html',
        minify: true
    });
});

gulp.task('default', ['scripts', 'styles', 'images', 'critical', 'watch']);

