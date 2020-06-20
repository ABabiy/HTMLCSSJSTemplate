module.exports = function () {
	$.gulp.task('sass', function () {
		return $.gulp.src('sass/style.sass')
			.pipe($.gp.plumber())
			//.pipe($.gp.sourcemaps.init({loadMaps: true}))
			.pipe($.gp.sass())
			.pipe($.gp.autoprefixer({
				overrideBrowserslist: ['last 2 versions'],
				cascade: false
			}))
			.pipe($.gp.csso())
			.pipe($.gp.rename('style.min.css'))
			//.pipe($.gp.sourcemaps.write(''))
			.pipe($.gulp.dest('build/css'))
			.pipe($.browserSync.stream());
	});
};
