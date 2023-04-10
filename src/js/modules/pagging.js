import posts from "./posts.js";

export default () => {
	const articlesBody = document.querySelector(".articles__body");
	const pagging = document.querySelector(".pagging__list");
	const btnPrev = document.getElementById("pagging-prev");
	const btnNext = document.getElementById("pagging-next");

	const limit = window.innerWidth <= 767 ? 3 : 5;
	const pageCount = Math.ceil(posts.length / limit);
	let thisPage = 1;

	if (!articlesBody || !pagging) return;

	const disableButton = (button) => {
		button.classList.remove("pagging__word_active");
		button.setAttribute("disabled", true);
	};

	const enableButton = (button) => {
		button.classList.add("pagging__word_active");
		button.removeAttribute("disabled");
	};

	const handlePageButtonsStatus = () => {
		if (thisPage === 1) {
			disableButton(btnPrev);
		} else {
			enableButton(btnPrev);
		}

		if (pageCount === thisPage) {
			disableButton(btnNext);
		} else {
			enableButton(btnNext);
		}
	};

	const handleActivePageNumber = () => {
		document.querySelectorAll(".pagging__list-link").forEach((button) => {
			button.classList.remove("pagging__list-link_active");
			const pageIndex = Number(button.getAttribute("page-index"));
			if (pageIndex == thisPage) {
				button.classList.add("pagging__list-link_active");
			}
		});
	};

	const appendPageNumber = (index) => {
		const pageNumber = document.createElement("button");
		pageNumber.className = "pagging__list-link";
		pageNumber.innerHTML = index;
		pageNumber.setAttribute("page-index", index);
		pageNumber.setAttribute("aria-label", "Page " + index);

		pagging.appendChild(pageNumber);
	};

	const getPaginationNumbers = () => {
		for (let i = 1; i <= pageCount; i++) {
			appendPageNumber(i);
		}
	};

	const renderPosts = (notes) => {
		articlesBody.innerHTML = "";
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

	const setCurrentPage = (pageNum) => {
		thisPage = pageNum;

		handleActivePageNumber();
		handlePageButtonsStatus();

		const start = (thisPage - 1) * limit;
		const end = limit * thisPage - 1;
		const arr = [];

		posts.forEach((item, index) => {
			if (index >= start && index <= end) {
				arr.push(item);
			}
		});

		renderPosts(arr);
	};

	window.addEventListener("load", () => {
		getPaginationNumbers();
		setCurrentPage(1);

		btnPrev.addEventListener("click", () => {
			setCurrentPage(thisPage - 1);
		});

		btnNext.addEventListener("click", () => {
			setCurrentPage(thisPage + 1);
		});

		document.querySelectorAll(".pagging__list-link").forEach((button) => {
			const pageIndex = Number(button.getAttribute("page-index"));

			if (pageIndex) {
				button.addEventListener("click", () => {
					setCurrentPage(pageIndex);
				});
			}
		});
	});
};
