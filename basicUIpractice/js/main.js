"use strict"; 
{
	const accordion_wrapper = document.querySelectorAll('.accordion .wrapper');
	const answer = document.querySelectorAll('.wrapper-txt_a');


	accordion_wrapper.addEventlistener('click', () => {
		answer.classList.toggle('active');
	});
}