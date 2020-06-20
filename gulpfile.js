global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	browserSync: require('browser-sync').create(),
	del: require('del'),
	imageminJpegRecompress: require('imagemin-jpeg-recompress'),
	//ssi: require("gulp-ssi"),
	pngquant: require('imagemin-pngquant'),
	path: {
		config: require('./gulp/config'),
		jquery: './node_modules/jquery/dist/jquery.js',
		bootstrap4: './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
		owl: './node_modules/owl.carousel2/dist/owl.carousel.min.js',
		js: './js/**/*.js',
		sass1 : 'sass/**/*.sass',
		sass2 : 'sass/blocks/**/*.sass',
	}
};

$.path.config.forEach(function (path) {
	require(path)();
});

