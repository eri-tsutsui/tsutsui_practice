'use strict';
{
	const btns = document.querySelectorAll('.menu-item a');
	const back_btn = document.getElementById('backbtn');
	
	btns.forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault();
			const href = btn.getAttribute('href');
			const target_work = document.querySelector(href);
			const rect = target_work.getBoundingClientRect();
			const rectTop = rect.top;

			window.scrollTo ({
				top: rectTop,
				behavior: 'smooth'
			});
		});
	});

	back_btn.addEventListener('click', e => {
		e.preventDefault();

		window.scrollTo ({
			top: 0,
			behavior: 'smooth'
		});
	});

}