import webpack from "webpack-stream";

export const js = () => {
	return $.gulp
		.src($.path.src.js, { sourcemaps: $.app.isDev })
		.pipe(
			$.plumber({
				errorHandler: $.notify.onError((error) => ({
					title: "JS",
					message: error.message,
				})),
			})
		)
		.pipe(
			webpack({
				mode: $.app.isDev ? "development" : "production",
				output: {
					filename: $.app.isDev ? "main.js" : "main.min.js",
				},
			})
		)
		.pipe($.gulp.dest($.path.build.js, { sourcemaps: $.app.isDev }))
		.pipe($.browserSync.stream());
};
