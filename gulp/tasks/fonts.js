export const fonts = () => {
	return $.gulp
		.src($.path.src.fonts)
		.pipe(
			$.plumber({
				errorHandler: $.notify.onError((error) => ({
					title: "FONTS",
					message: error.message,
				})),
			})
		)
		.pipe($.gulp.dest($.path.build.fonts));
};
