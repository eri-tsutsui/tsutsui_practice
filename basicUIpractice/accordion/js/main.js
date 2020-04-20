"use strict"; 
// アコーディオン
{
	// const accordion_wrapper = document.querySelectorAll('.wrapper');

	// for (let i = 0; i < accordion_wrapper.length; i ++) {
	// 	accordion_wrapper[i].addEventListener('click', e => {
	// 		const target = event.target;
	// 		console.log(target);
	// 		const target_answer = target.querySelector('.wrapper-txt_a');
	// 		console.log(target_answer);
	// 		target_answer.classList.toggle('active');	
	// 	});
	// } 

	const accordion_wrappers = document.querySelectorAll('.wrapper');

	accordion_wrappers.forEach(clickedItem => {
		clickedItem.addEventListener('click', () => {
			console.log(clickedItem);
			const clickedItemAnswer = clickedItem.querySelector('.wrapper-txt_a');
			clickedItemAnswer.classList.toggle('active');	
		});
	});
	
}

