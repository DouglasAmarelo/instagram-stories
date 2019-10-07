import { data } from './_data.js';

const $storiesCardList = document.querySelector('.stories-card-list');
const $storiesPrev = document.querySelectorAll('.stories-prev');
const $storiesNext = document.querySelectorAll('.stories-next');

const windowWidth = $storiesCardList.clientWidth;
$storiesCardList.setAttribute('data-position', '0');

$storiesPrev.forEach((item, index) => {
	item.addEventListener('click', () => {
		const currentPosition = $storiesCardList.getAttribute('data-position');
		const newPosition = (Math.abs(currentPosition) - windowWidth);

		$storiesCardList.style.transform = `translateX(-${newPosition}px)`;
		$storiesCardList.setAttribute('data-position', `${newPosition}`);
	});
});

$storiesNext.forEach((item, index) => {
	item.addEventListener('click', () => {
		const currentPosition = $storiesCardList.getAttribute('data-position');
		const newPosition = (Math.abs(currentPosition) + windowWidth);

		$storiesCardList.style.transform = `translateX(-${newPosition}px)`;
		$storiesCardList.setAttribute('data-position', `${newPosition}`);
	});
});