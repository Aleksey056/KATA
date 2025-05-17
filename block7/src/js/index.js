import '../scss/style.scss'

function swiperFunction() {

  let swiper = new Swiper(".slider", {
    slidesPerView: 'auto',
    spaceBetween: 16,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
        allowTouchMove: false, 
        enabled: false,
        spaceBetween: 0,
      }
    }

  });
}

swiperFunction();

const swiperBrands = document.querySelectorAll('.swiper-brands');

let brandsImage = [
	{
		imgUrl: require('../img/brands/Lenovo.svg'),
		atl: 'Логотип Lenovo'
	},

	{
		imgUrl: require('../img/brands/Samsung.svg'),
		atl: 'Логотип Samsung'
	},

	{
		imgUrl: require('../img/brands/Apple.svg'),
		atl: 'Логотип Apple'
	},

	{
		imgUrl: require('../img/brands/View-sonic.svg'),
		atl: 'Логотип View-Sonic'
	},

	{
		imgUrl: require('../img/brands/Bosch.svg'),
		atl: 'Логотип Bosch'
	},

	{
		imgUrl: require('../img/brands/HP.svg'),
		atl: 'Логотип HP'
	},

	{
		imgUrl: require('../img/brands/Acer.svg'),
		atl: 'Логотип Acer'
	},

	{
		imgUrl: require('../img/brands/Sony.svg'),
		atl: 'Логотип Sony'
	},

	{
		imgUrl: require('../img/brands/HP.svg'),
		atl: 'Логотип HP'
	},

	{
		imgUrl: require('../img/brands/Acer.svg'),
		atl: 'Логотип Acer'
	},

	{
		imgUrl: require('../img/brands/Sony.svg'),
		atl: 'Логотип Sony'
	},
]


function createCardBrands(image) {

	for (let i = 0; i < image.length; i++) {

		const slide = document.createElement('div');
		slide.classList.add('swiper-slide');
		swiperBrands[0].appendChild(slide);

		const slideItem = document.createElement('a');
		slideItem.classList.add('swiper-brands__item');
		slide.appendChild(slideItem);

		const imgItem = document.createElement('img');
		imgItem.src = image[i].imgUrl;
		imgItem.alt = image[i].alt;
		slideItem.appendChild(imgItem);

		const btn = document.createElement('button');
		btn.classList.add('icon-button');
		slideItem.appendChild(btn);

	}
}

createCardBrands(brandsImage);

console.log('ТЕСТ - выполнено');









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