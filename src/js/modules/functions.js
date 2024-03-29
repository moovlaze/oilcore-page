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

export const popupImg = function () {
	const images = document.querySelectorAll("img[data-popup-img]");
	const popup = document.querySelector(".popup-img");

	if (!images || !popup) return;

	const openPopup = () => {
		popup.classList.add("popup-img_visible");
		document.body.classList.add("page_lock");
	};

	const closePopup = (e) => {
		if (
			!e.target.closest(".popup-img__body") ||
			e.target.closest(".popup-img__close")
		) {
			popup.classList.remove("popup-img_visible");
			document.body.classList.remove("page_lock");
		}
	};

	images.forEach((img) => {
		img.addEventListener("click", openPopup);
	});

	popup.addEventListener("click", closePopup);
};

export const scrollToSection = function () {
	const links = document.querySelectorAll("a[data-scroll-link]");
	const sections = document.querySelectorAll("section[data-scroll-section]");

	if (!links || !sections) return;

	const scrollBehavior = (selector) => {
		document.querySelector(`.${selector}`).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	links.forEach((link) => {
		let linkDataValue = link.dataset.scrollLink;

		link.addEventListener("click", (e) => {
			e.preventDefault();
			sections.forEach((section) => {
				if (section.dataset.scrollSection === linkDataValue) {
					scrollBehavior(section.dataset.scrollSection);
				}
			});
		});
	});
};
