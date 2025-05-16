import '../scss/style.scss'


const expandBrands = document.getElementById('brandsList');
const expandButtonText = document.getElementById('expandButtonText');

expandButtonText.addEventListener('click', function () {
	expandBrands.classList.toggle('brands__list--expand');
	expandButton.classList.toggle('expand-button--expand');
	if (expandBrands.classList.contains('brands__list--expand')) {
		expandButtonText.textContent = 'Скрыть';
	} else {
		expandButtonText.textContent = 'Показать всё';
	}
});


const swiper = new Swiper('.swiper', {
	// Optional parameters
	// spaceBetween: -80,

	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},

	direction: 'horizontal',
	loop: true,


	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		// dynamicBullets: true,
		// dynamicMainBullets: 1,
	},

	mousewheel: {
		invert: true,
	},
});
