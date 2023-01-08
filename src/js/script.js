// Плавный скролл по ссылкам
const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
	link.addEventListener("click", function (e) {
		e.preventDefault();

		const id = link.getAttribute('href');

		document.querySelector(id).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
};

// Меню
const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  close = document.querySelector('.close'),
	  overlay = document.querySelector('.menu__overlay');
	

let addToggleMenuListener = function (obj){
	obj.addEventListener('click', () => {
		menu.classList.toggle('active');
	});
};

addToggleMenuListener(hamburger);
addToggleMenuListener(close);
addToggleMenuListener(overlay);


// Автоматический пересчет процентов
const percents = document.querySelectorAll('.item-percent'),
	  lines = document.querySelectorAll('.item-diagram_fill');

percents.forEach( (item, i) => {
	lines[i].style.width = item.innerHTML;
});