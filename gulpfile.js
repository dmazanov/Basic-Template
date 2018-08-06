const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', () => {
	gulp.src('app/templates/pages/**/*.pug')
		.pipe(pug({
			pretty: '\t'
		}))
		.pipe(gulp.dest('app'))
});

gulp.task('watch', () => {
	gulp.watch('app/templates/**/*.pug', ['pug'])
});