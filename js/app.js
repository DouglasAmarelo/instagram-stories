import { data } from './_data.js';

const $storiesCardList = $('.stories-card-list');
const $storiesCardListItem = $('.stories-card-list__item');
const $counter = $('.stories-card-list__counter');

const $storiesPrev = document.querySelectorAll('.stories-prev');
const $storiesNext = document.querySelectorAll('.stories-next');

const timeToAnimate = 7000;



$storiesCardListItem.on('focus', function(e) {
	e.preventDefault();

	setInterval(() => {
		console.log('Opa');
	}, timeToAnimate);

});


$(document).ready(function() {
	$('.stories-card-list').slick({
		autoplay: true,
		autoplaySpeed: timeToAnimate,
		infinite: false,
		nextArrow: $('.stories-next'),
		prevArrow: $('.stories-prev'),
	});
});