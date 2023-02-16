export const openBurgerMenu = function () {
	const page = document.querySelector(".page");
	const menu = document.querySelector(".nav__top");
	const burger = document.querySelector(".burger");

	burger.addEventListener("click", function () {
		menu.classList.toggle("open");
		page.classList.toggle("page_lock");
		burger.classList.toggle("active");
	});
};
