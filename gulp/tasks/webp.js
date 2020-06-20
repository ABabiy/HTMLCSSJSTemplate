module.exports = function () {
	$.gulp.task('webp', function () {
		return $.gulp.src('img/**/*.{jpg,png}')
			.pipe($.gp.webp({quality: 80}))
			.pipe($.gulp.dest('build/img'));
	});
};
