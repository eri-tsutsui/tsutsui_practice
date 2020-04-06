"use strict"; 
{
	const accordion_wrapper = document.querySelectorAll('.accordion .wrapper');
	const answer = document.querySelectorAll('.wrapper-txt_a');

	for (let i = 0; i < accordion_wrapper.length; i++) {
		accordion_wrapper[i].addEventListener('click', (e) => {

			const target = event.target
			const target_answer = target.nextElementSibling;

			console.log(target);
			console.log(target_answer);
			
			target_answer.classList.toggle('active');
		});
	}

}