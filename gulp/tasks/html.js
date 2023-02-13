import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import replace from "gulp-replace";

export const html = () => {
	return $.gulp
		.src($.path.src.html)
		.pipe(
			$.plumber({
				errorHandler: $.notify.onError((error) => ({
					title: "HTML",
					message: error.message,
				})),
			})
		)
		.pipe(fileInclude())
		.pipe(replace(/@img\//g, "./img/"))
		.pipe(
			$.gulpIf(
				$.app.isProd,
				htmlmin({
					collapseWhitespace: true,
				})
			)
		)
		.pipe($.gulp.dest($.path.build.html))
		.pipe($.browserSync.stream());
};
