module.exports = function () {
	$.gulp.task('allimg', function () {
		return $.gulp.src('img/**/*.{jpg,png,svg,ico,webp}')
			.pipe($.gulp.dest('build/img'))
			.on('end', $.browserSync.reload);
	});
};
