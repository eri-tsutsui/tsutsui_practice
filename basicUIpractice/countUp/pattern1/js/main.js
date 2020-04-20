'use strict';
{
	const timer = document.getElementById('timer');
	let number = 0;

	setInterval(countUp, 30);

	function countUp () {
		if (number < 100) {
			number ++;
			timer.textContent = number;
		}
	}
}
