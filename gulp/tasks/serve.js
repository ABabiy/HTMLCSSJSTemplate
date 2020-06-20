module.exports = function () {
  $.gulp.task('serve', function () {
    $.browserSync.init({
      server: 'build/'
    });

    $.gulp.watch('sass/**/*.sass', $.gulp.series('sass'));
    $.gulp.watch('*.html', $.gulp.series('html'));
    $.gulp.watch('js/**/*.js', $.gulp.series('scripts'));
    //$.gulp.watch('img/**/*.{png,jpg,svg,ico}', $.gulp.series('allimg','webp'));
    //$.gulp.watch('img/**/*.{png,jpg}', $.gulp.series('webp'));
    $.gulp.watch('img/**/*.{png,jpg,svg,ico,webp}', $.gulp.series(
       'webp',
       'allimg'
    ));
  });
};
