"use strict"; 
// アコーディオン
{
	const accordion_wrapper = document.querySelectorAll('.accordion .wrapper');

	for (let i = 0; i < accordion_wrapper.length; i++) {
		accordion_wrapper[i].addEventListener('click', (e) => {
			const target = event.target
			const target_answer = target.nextElementSibling;
			
			target_answer.classList.toggle('active');
		});
	}
	
}
