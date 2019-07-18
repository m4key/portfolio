/* Hamburger menu */
const hamburger = options => {
	const button = document.querySelector(options.button);
	const menu = document.querySelector(options.menu);
	const list = document.querySelector(".popup-menu__list");
	const about=document.querySelector(".about");
	const subtitle=document.querySelector(".portfolio__subtitle");
	const title=document.querySelector(".portfolio__title");

	const _openMenu = e => {
		e.preventDefault();
		menu.classList.toggle("popup-menu--active");
		button.classList.toggle("hamburger-link--active");
    document.body.classList.toggle('active-popup');
		about.classList.toggle('disable');
		subtitle.classList.toggle('disable');
		title.classList.toggle('disable');
	};

	const _closeMenu = e => {
		e.preventDefault();
		if (e.target.className === "popup-menu__link") {
			menu.classList.remove("popup-menu--active");
			button.classList.remove("hamburger-link--active");
      document.body.classList.remove('active-popup');
			about.classList.remove('disable');
			subtitle.classList.remove('disable');
			title.classList.remove('disable');
		}
	};

	const addListeners = () => {
		button.addEventListener("click", _openMenu);
		list.addEventListener("click", _closeMenu);
	};

	return {
		init: addListeners
	};
};

hamburger({
	button: ".hamburger-link",
	menu: ".popup-menu"
}).init();