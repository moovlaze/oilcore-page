const build = "./public";
const src = "./src";

export const path = {
	root: `${build}`,

	src: {
		files: `${src}/files/**/*.*`,
		styles: `${src}/scss/*.scss`,
		html: `${src}/html/*.html`,
		js: `${src}/js/*.js`,
		img: `${src}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${src}/img/**/*.svg`,
		fonts: `${src}/fonts/*.*`,
	},
	build: {
		files: `${build}/files`,
		styles: `${build}/css`,
		html: `${build}`,
		js: `${build}/js`,
		img: `${build}/img`,
		fonts: `${build}/fonts`,
	},
	watch: {
		files: `${src}/files/**/*.*`,
		styles: `${src}/scss/**/*.scss`,
		html: `${src}/**/*.html`,
		js: `${src}/js/**/*.js`,
		img: `${src}/img/**/*.*`,
		fonts: `${src}/fonts/*.*`,
	},
};
