var gulp = require('gulp')
var watch = require('gulp-watch')
var stylus = require('gulp-stylus')

gulp.task('stylus', function(){

	return gulp.src('public/css/stylus/*.styl')
		.pipe(watch('public/css/stylus/*.styl'))
		.pipe(stylus())
		.pipe(gulp.dest('public/css'))		

})

gulp.task('default', ['stylus'])
