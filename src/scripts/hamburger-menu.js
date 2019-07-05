/* Hamburger menu */
let hamburger = options => {
	let button = document.querySelector(options.button);
	let menu = document.querySelector(options.menu);
  let list = document.querySelector(".popup-menu__list");
	let about=document.querySelector(".about");
	let subtitle=document.querySelector(".portfolio__subtitle");
	let title=document.querySelector(".portfolio__title");

	let _openMenu = e => {
		e.preventDefault();
		menu.classList.toggle("popup-menu--active");
		button.classList.toggle("hamburger-menu-link--active");
    menu.style.transform = 'translateX(0)';
    document.body.classList.toggle('active-popup');
		about.classList.toggle('disable');
		subtitle.classList.toggle('disable');
		title.classList.toggle('disable');
	};

	let _closeMenu = e => {
		e.preventDefault();
		if (e.target.className === "popup-menu__link") {
			menu.classList.remove("popup-menu--active");
			button.classList.remove("hamburger-menu-link--active");
      menu.style.transform = 'translateX(100%)';
      document.body.classList.remove('active-popup');
			about.classList.remove('disable');
			subtitle.classList.remove('disable');
			title.classList.remove('disable');
		}
	};

	let addListeners = () => {
		button.addEventListener("click", _openMenu);
		list.addEventListener("click", _closeMenu);
	};

	return {
		init: addListeners
	};
};

hamburger({
	button: ".hamburger-menu-link",
	menu: ".popup-menu"
}).init();