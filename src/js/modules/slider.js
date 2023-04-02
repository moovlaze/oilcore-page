import Swiper, { Scrollbar } from "swiper";

export const slider = (selector) => {
	if (window.innerWidth >= 991) return;

	const swiper = new Swiper(`${selector}`, {
		modules: [Scrollbar],
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: true,
		},
		slidesPerView: 2,
		spaceBetween: 15,
		breakpoints: {
			575: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});
};

export const sliderTwo = () => {
	if (window.innerWidth >= 991) return;

	const swiper = new Swiper(".reviews__body", {
		modules: [Scrollbar],
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: true,
		},
		slidesPerView: 1,
		spaceBetween: 15,
		breakpoints: {
			767: {
				slidesPerView: 2,
			},
		},
	});
};
