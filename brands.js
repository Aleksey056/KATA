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
	direction: 'horizontal',
	loop: true,
 
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
 
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	 },

	mousewheel: {
		invert: true,
	 },
 
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	  draggable: true,
	},



	
 });