'use strict';
{
	const typewriter = document.getElementById('typewriter');
	const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facere accusantium maiores fugiat. Dolores exercitationem dicta in magni saepe. Quas eveniet sed, maxime unde ut harum optio. Illo, temporibus cupiditate.';
	let letters = txt.split(''); 
	const speed = 50;

	letters.forEach((letter, index) => {
		setTimeout(() => {
			typewriter.textContent += letter;
		}, speed * index);
	});

	

	// 以下の通り書き換え可能
	// for (let i = 0; i < letters.length; i ++) {
	// 	setTimeout(() => {
	// 		typewriter.textContent += letters[i];
	// 	}, speed * i);
	// }

}
