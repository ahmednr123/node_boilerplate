var gulp = require('gulp')
var watch = require('gulp-watch')
var jade = require('gulp-jade')
var stylus = require('gulp-stylus')

gulp.task('jade', function(){

	return gulp.src('public/views/*.jade')
		.pipe(watch('public/views/*.jade'))
		.pipe(jade())
		.pipe(gulp.dest('public/views'))

})

gulp.task('stylus', function(){

	return gulp.src('public/css/*.styl')
		.pipe(watch('public/css/*.styl'))
		.pipe(stylus())
		.pipe(gulp.dest('public/css'))		

})

gulp.task('default', ['jade', 'stylus'])
