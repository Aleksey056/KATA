import { name } from 'file-loader';
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








const swiperTechnic = document.querySelectorAll('.swiper-technic');
let services = [
	{name: 'Ремонт ноутбуков'},
	{name: 'Ремонт планшетов'},
	{name: 'Ремонт ПК'},
	{name: 'Ремонт мониторов'},
	{name: 'Ремонт видеокарты'},
	{name: 'Ремонт материнской платы'},
	{name: 'Ремонт ЦП'},
	{name: 'Чистка компьютера'},
	{name: 'VIP обслуживание ПК'},
]

function createCardTechnic (name) {
	for (let i = 0; i < services.length; i++ ) {

		const slide = document.createElement('div');
		slide.classList.add('swiper-slide');
		swiperTechnic[0].appendChild(slide);

		const slideItem = document.createElement('a');
		slideItem.classList.add('swiper-technic__item');
		slide.appendChild(slideItem);

		const slideName = document.createElement('span');
		slideName.textContent = services[i].name;
		slideItem.appendChild(slideName);

		const btn = document.createElement('button');
		btn.classList.add('icon-button');
		slideItem.appendChild(btn);
	}
}
createCardTechnic (services);








const swiperPrice = document.querySelectorAll('.swiper-price');
let price = [
	{
		text: 'Диагностика',
		price: 'Бесплатно',
		period: '30 мин',
	},
	{
		text: 'Замена дисплея',
		price: '1000',
		period: '30-120 мин',
	},
	{
		text: 'Замена полифонического динамика',
		price: '1000',
		period: '30-120 мин',
	},
	{
		text: 'Тестирование с выдачей технического заключения',
		price: '1000',
		period: '30-120 мин',
	},
	{
		text: 'Замена программного обеспечения',
		price: '1000',
		period: '30-120 мин',
	},

]

function createCardPrice (price) {
	for (let i = 0; i < price.length; i++ ) {

		const slide = document.createElement('div');
		slide.classList.add('swiper-slide');
		swiperPrice[0].appendChild(slide);

		const slideItem = document.createElement('a');
		slideItem.classList.add('swiper-price__item');
		slide.appendChild(slideItem);

		const slideText = document.createElement('span');
		slideText.textContent = price[i].text;
		slideItem.appendChild(slideText);

		const slidePrice = document.createElement('span');
		slidePrice.textContent = price[i].price;
		slideItem.appendChild(slidePrice);

		const slidePeriod = document.createElement('span');
		slidePeriod.textContent = price[i].period;
		slideItem.appendChild(slidePeriod);

		const btn = document.createElement('button');
		btn.classList.add('icon-price');
		slideItem.appendChild(btn);
	}
}
createCardPrice (price);














function dropBurger () {
	
}
// dropBurger():


// BUTTON FUNCTIONAL


const buttonBurger = document.getElementById('buttonBurger');
const buttonBurgerHidden = document.getElementById('buttonBurgerHidden');

const buttonFeedback = document.getElementById('buttonFeedback');
const buttonFeedbackHidden = document.getElementById('buttonFeedbackHidden');

const buttonCallback = document.getElementById('buttonCallback');
const buttonCallbackHidden = document.getElementById('buttonCallbackHidden');

const mobilMenu = document.getElementById('mobil-menu');
const feedback = document.getElementById('feedback');
const callback = document.getElementById('callback');
const main = document.querySelector('main', 'mobil-menu');

// drop-burger
buttonBurger.addEventListener('click', function () {
	mobilMenu.classList.add('mobil-menu--active');
	main.classList.add('blur');
});
buttonBurgerHidden.addEventListener('click', function() {
	mobilMenu.classList.remove('mobil-menu--active');
	main.classList.remove('blur');
});

// drop-feedback
buttonFeedback.addEventListener('click', function() {
	feedback.classList.add('feedback--active');
	mobilMenu.classList.remove('mobil-menu--active');
	mobilMenu.classList.add('blur')
	main.classList.add('blur');
});
buttonFeedbackHidden.addEventListener('click', function() {
	console.log('ckic')
	feedback.classList.remove('feedback--active');
	main.classList.remove('blur');
	mobilMenu.classList.remove('blur')
});

//drop-callback
buttonCallback.addEventListener('click', function() {
	console.log("нажатие")
	callback.classList.add('callback--active');
	mobilMenu.classList.remove('mobil-menu--active');
	mobilMenu.classList.add('blur')
	main.classList.add('blur');
});
buttonCallbackHidden.addEventListener('click', function() {
	console.log("закрытие")
	console.log('ckic')
	callback.classList.remove('callback--active');
	main.classList.remove('blur');
	mobilMenu.classList.remove('blur')
});





// expand block

const expandBrands = document.getElementById('brandsList');
const expandButtonText = document.getElementById('expandButtonText');

expandButtonText.addEventListener('click', function () {
	expandBrands.classList.toggle('swiper-brands--expand');
	expandButton.classList.toggle('expand-button--expand');
	if (expandBrands.classList.contains('swiper-brands--expand')) {
		expandButtonText.textContent = 'Скрыть';
	} else {
		expandButtonText.textContent = 'Показать всё';
	}
});

const expandTechnic = document.getElementById('technicList');
const expandButtonTechnic = document.getElementById('technic-expandButtonText');

expandButtonTechnic.addEventListener('click', function () {
	expandTechnic.classList.toggle('swiper-technic--expand');
	expandButton.classList.toggle('expand-button--expand');
	if (expandTechnic.classList.contains('swiper-technic--expand')) {
		expandButtonTechnic.textContent = 'Скрыть';
	} else {
		expandButtonTechnic.textContent = 'Показать всё';
	}
});


