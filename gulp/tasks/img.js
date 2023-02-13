import newer from "gulp-newer";
import imagemin from "gulp-imagemin";

export const img = () => {
	return $.gulp
		.src($.path.src.img)
		.pipe(
			$.plumber({
				errorHandler: $.notify.onError((error) => ({
					title: "IMG",
					message: error.message,
				})),
			})
		)
		.pipe(newer($.path.build.img))
		.pipe($.gulpIf($.app.isProd, imagemin()))
		.pipe($.gulp.dest($.path.build.img))
		.pipe($.gulp.src($.path.src.svg))
		.pipe(newer($.path.build.img))
		.pipe($.gulp.dest($.path.build.img))
		.pipe($.browserSync.stream());
};
