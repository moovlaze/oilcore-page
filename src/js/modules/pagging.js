import posts from "./posts.js";

export default () => {
	const articlesBody = document.querySelector(".articles__body");
	const pagging = document.querySelector(".pagging");
	const paggingList = document.querySelector(".pagging__list");
	const btnPrev = document.getElementById("pagging-prev");
	const btnNext = document.getElementById("pagging-next");

	if (!articlesBody || !pagging) return;

	let notesOnPage = window.innerWidth <= 767 ? 3 : 5;
	let quantityPaginationBtn = Math.ceil(posts.length / notesOnPage);

	const renderPaginationBtn = () => {
		for (let i = 1; i <= quantityPaginationBtn; i++) {
			let newBtn = `
			<a href="#!" class="pagging__list-link">${i}</a>`;

			if (i === 1)
				newBtn = `
			<a href="#!" class="pagging__list-link pagging__list-link_active">${i}</a>`;

			if (i > 5 && i < quantityPaginationBtn + 1) {
				newBtn = `
			<a href="#!" class="pagging__list-link">...</a>`;
			}

			paggingList.insertAdjacentHTML("beforeend", newBtn);
		}
	};

	const hiddenPaginationBtn = () => {
		const paginationBtn = document.querySelectorAll(".pagging__list-link");
		const fiveBtn = paginationBtn[4];
		const lastBtn = paginationBtn[paginationBtn.length - 1];

		if (paginationBtn.length < 6) return;
		console.log(fiveBtn);
		console.log(lastBtn);
	};

	const renderPosts = (notes) => {
		notes.forEach((note) => {
			let newPost = `<article class="articles__article article">
      <div class="article__pic">
        <img src="${note.image}" alt="картинка">
      </div>
      <div class="article__info">
        <h2 class="article__title">${note.title}</h2>
        <ul class="article__list">
          <li class="article__list-item">Дата: ${note.date}</li>
          <li class="article__list-item">Автор: ${note.author}</li>
          <li class="article__list-item">Просмотров: ${note.views}</li>
          <li class="article__list-item">Комментариев: ${note.comments}</li>
        </ul>
        <p class="article__text">${note.text}</p>
        <a href="./note.html" class="article__btn btn btn_border">Читать далее</a>
      </div>
    </article>`;

			articlesBody.insertAdjacentHTML("beforeend", newPost);
		});
	};

	const tapNumber = (e) => {
		e.preventDefault();

		const paginationBtn = document.querySelectorAll(".pagging__list-link");

		let currentPage = +e.target.textContent;
		let start = (currentPage - 1) * notesOnPage;
		let end = notesOnPage + start;
		let notes = posts.slice(start, end);

		paginationBtn.forEach((item) => {
			item.classList.remove("pagging__list-link_active");
		});

		e.target.classList.add("pagging__list-link_active");

		articlesBody.innerHTML = "";
		renderPosts(notes);
	};

	const tapWordNext = (e) => {
		let activeBtn = document.querySelector(".pagging__list-link_active");
		let nextActiveBtn = document.querySelector(
			".pagging__list-link_active ~ .pagging__list-link"
		);

		if (!nextActiveBtn) {
			e.target.setAttribute("disabled", "true");
			e.target.classList.remove("pagging__word_active");
			return;
		}

		activeBtn.classList.remove("pagging__list-link_active");
		nextActiveBtn.classList.add("pagging__list-link_active");
	};

	pagging.addEventListener("click", (e) => {
		if (e.target.closest(".pagging__list-link")) tapNumber(e);
		if (e.target.closest(".pagging__word_next")) tapWordNext(e);
	});

	renderPaginationBtn();
	hiddenPaginationBtn();

	if (window.innerWidth <= 767) {
		renderPosts(posts.slice(0, 3));
	} else {
		renderPosts(posts.slice(0, 5));
	}
};
