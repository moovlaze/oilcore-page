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

export const map = function () {
	const init = function () {
		var myMap = new ymaps.Map("map", {
			center: [55.755811, 37.617617],
			zoom: 10,
		});

		myMap.controls.remove("geolocationControl");
		myMap.controls.remove("searchControl");
		myMap.controls.remove("trafficControl");
		myMap.controls.remove("typeSelector");
		myMap.controls.remove("fullscreenControl");
		myMap.controls.remove("zoomControl");
		myMap.controls.remove("rulerControl");
		myMap.behaviors.disable(["scrollZoom"]);
	};
	ymaps.ready(init);
};
