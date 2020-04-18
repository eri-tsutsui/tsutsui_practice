'use strict';
{
	const imgFirst = document.querySelector('.slider-item:first-child'); 
	const imgs = document.querySelectorAll('.slider-item');
	let  currentIndex = 0;
	let length = imgs.length;

	imgFirst.style.opacity = '1';

	// 7500秒ごとにshowNextSlideを実行
	setInterval(showNextSlide, 7500);

	function showNextSlide () {
		let nextIndex = (currentIndex + 1) % length;

		imgs[currentIndex].style.opacity = '0';
		imgs[nextIndex].style.opacity = '1';
		
		currentIndex = nextIndex;
	}

}