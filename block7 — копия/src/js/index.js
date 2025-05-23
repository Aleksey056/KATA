import { name } from 'file-loader';
import '../scss/style.scss'

function swiperFunction() {

  let swiper = new Swiper(".slider", {
    slidesPerView: 'auto',
    // spaceBetween: 16,

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
		price: '1 000 ₽',
		period: '30-120 мин',
	},
	{
		text: 'Замена полифонического динамика',
		price: '1 000 ₽',
		period: '30-120 мин',
	},
	{
		text: 'Тестирование с выдачей технического заключения',
		price: '1 000 ₽',
		period: '30-120 мин',
	},
	{
		text: 'Замена программного обеспечения',
		price: '1 000 ₽',
		period: '30-120 мин',
	},
	
]

function createCardPrice (price) {

		const titleText = 'Ремонтные услуги';
		const titlePrice = 'Цена';
		const titlePeriod = 'Срок';

	for (let i = 0; i < price.length; i++ ) {

		const slide = document.createElement('div');
		slide.classList.add('swiper-slide');
		swiperPrice[0].appendChild(slide);



		const slideItem = document.createElement('a');
		slideItem.classList.add('swiper-price__item');
		slide.appendChild(slideItem);



		const divText = document.createElement('div');
		slideItem.appendChild(divText);

			const spanTitleText = document.createElement('span');
			spanTitleText.textContent = titleText;
			spanTitleText.classList.add('span-title')
			divText.appendChild(spanTitleText);
	
			const spanText = document.createElement('span');
			spanText.textContent = price[i].text;
			spanText.classList.add('span-text')
			divText.appendChild(spanText);



		const divPrice = document.createElement('div');
		slideItem.appendChild(divPrice);

			const spanTitlePrice = document.createElement('span');
			spanTitlePrice.textContent = titlePrice;
			spanTitlePrice.classList.add('span-title')
			divPrice.appendChild(spanTitlePrice);

			const spanPrice = document.createElement('span');
			spanPrice.textContent = price[i].price;
			spanPrice.classList.add('span-text')
			divPrice.appendChild(spanPrice);



		const divPeriod = document.createElement('div');
		slideItem.appendChild(divPeriod);
		
			const spanTitlePeriod = document.createElement('span');
			spanTitlePeriod.textContent = titlePeriod;
			spanTitlePeriod.classList.add('span-title')
			divPeriod.appendChild(spanTitlePeriod);

			const spanPeriod = document.createElement('span');
			spanPeriod.textContent = price[i].period;
			spanPeriod.classList.add('span-text')
			divPeriod.appendChild(spanPeriod);



		const btn = document.createElement('button');
		btn.classList.add('icon-price');
		slideItem.appendChild(btn);
	}
}
createCardPrice (price);




















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
	technicExpandButton.classList.toggle('expand-button--expand');
	if (expandTechnic.classList.contains('swiper-technic--expand')) {
		expandButtonTechnic.textContent = 'Скрыть';
	} else {
		expandButtonTechnic.textContent = 'Показать всё';
	}
});






















// BUTTON FUNCTIONAL

const buttonBurger = document.getElementById('buttonBurger');
const buttonBurgerHidden = document.getElementById('buttonBurgerHidden');

const buttonFeedback = document.getElementById('buttonFeedback');
// const buttonFeedback = document.getElementsByClassName('.round-icon--call');
// const buttonFeedback = document.querySelectorAll('#buttonFeedback', '#buttonFeedback2');

const buttonFeedbackHidden = document.getElementById('buttonFeedbackHidden');

const buttonCallback = document.getElementById('buttonCallback');
const buttonCallbackHidden = document.getElementById('buttonCallbackHidden');

const mobilMenu = document.getElementById('mobil-menu');
const feedback = document.getElementById('feedback');
const callback = document.getElementById('callback');
const windowBlur = document.getElementById('windowBlur');






// drop-burger

buttonBurger.addEventListener('click', function () {
	mobilMenu.classList.add('mobil-menu--active');
	windowBlur.classList.add('windowBlur--active');
});

buttonBurgerHidden.addEventListener('click', function() {
	mobilMenu.classList.remove('mobil-menu--active');
	windowBlur.classList.remove('windowBlur--active');
});



// drop-feedback

buttonFeedback.addEventListener('click', function() {
	feedback.classList.add('feedback--active');
	mobilMenu.classList.remove('mobil-menu--active');
	callback.classList.remove('callback--active');
	mobilMenu.classList.add('windowBlur--active')
	windowBlur.classList.add('windowBlur--active');
});

buttonFeedbackHidden.addEventListener('click', function() {
	feedback.classList.remove('feedback--active');
	windowBlur.classList.remove('windowBlur--active');
	mobilMenu.classList.remove('windowBlur--active')
});



//drop-callback

buttonCallback.addEventListener('click', function() {
	callback.classList.add('callback--active');
	mobilMenu.classList.remove('mobil-menu--active');
	feedback.classList.remove('feedback--active');
	mobilMenu.classList.add('windowBlur--active')
	windowBlur.classList.add('windowBlur--active');
});

buttonCallbackHidden.addEventListener('click', function() {
	callback.classList.remove('callback--active');
	windowBlur.classList.remove('windowBlur--active');
	mobilMenu.classList.remove('windowBlur--active')
});























function keyESC () {
	document.addEventListener('keydown', function(e){
    if (e.keyCode === 27 && feedback.classList.contains('feedback--active') ||
				e.keyCode === 27 && windowBlur.classList.contains('mobil-menu--active') ||
				e.keyCode === 27 && callback.classList.contains('callback--active') ||
				e.keyCode === 27 && windowBlur.classList.contains('windowBlur--active')) {

					
					feedback.classList.remove('feedback--active');
					callback.classList.remove('callback--active');
					mobilMenu.classList.remove('mobil-menu--active');
					windowBlur.classList.remove('windowBlur--active');
    }
  })
}
keyESC();















document.addEventListener('click', function(evt){
  if(evt.target.classList.contains('windowBlur')){
    feedback.classList.remove('feedback--active');
    callback.classList.remove('callback--active');
		mobilMenu.classList.remove('mobil-menu--active');
		mobilMenu.classList.remove('windowBlur--active');
		windowBlur.classList.remove('windowBlur--active');
  }
})

