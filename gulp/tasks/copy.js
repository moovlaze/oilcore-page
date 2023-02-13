import newer from "gulp-newer";

export const copy = () => {
	return $.gulp
		.src($.path.src.files)
		.pipe(
			$.plumber({
				errorHandler: $.notify.onError((error) => ({
					title: "COPY",
					message: error.message,
				})),
			})
		)
		.pipe(newer($.path.build.files))
		.pipe($.gulp.dest($.path.build.files))
		.pipe($.browserSync.stream());
};
