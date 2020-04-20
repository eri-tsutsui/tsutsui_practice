'use strict';
{
	const btn = document.getElementById('arrow');

	btn.addEventListener('click', () => {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		});
	});
}