"use strict"; 
// アコーディオン
{
	const accordion_wrapper = document.querySelectorAll('.wrapper');

	for (let i = 0; i < accordion_wrapper.length; i ++) {
		accordion_wrapper[i].addEventListener('click', e => {
			const target = event.target;
			console.log(target);
			const target_answer = target.querySelector('.wrapper-txt_a');
			target_answer.classList.toggle('active');	
		});
	} 

	// const accordion_wrappers = document.querySelectorAll('.wrapper');

	// accordion_wrappers.forEach(clickedItem => {
	// 	clickedItem.addEventListener('click', () => {
	// 		console.log(clickedItem);
	// 		const clickedItemAnswer = clickedItem.querySelector('.wrapper-txt_a');
	// 		clickedItemAnswer.classList.toggle('active');	
	// 	});
	// });

}

// // スライダー
// {
//   	let numbers = document.querySelectorAll('.number-item');
// 	const btns = document.querySelectorAll('.btns-txt');
//     const prev = document.getElementById('prev');
//     const next = document.getElementById('next');
// 	const target_image = document.querySelector('.images-item img');
// 	const images = [
// 		'images/02_01.jpg',
// 		'images/02_02.jpg',
// 		'images/02_03.jpg',
// 		'images/02_04.jpg'
// 	 ];

// 	for (let i = 0; i < numbers.length; i++) {
// 		numbers[i].addEventListener('click', (e) => {
// 			// クリックした番号を取得
// 			const number = e.target;
// 			// その番号のインデックスを取得
// 			const index = Array.prototype.indexOf.call(numbers, number);
// 			// 同じインデックス番号の写真のsrc値を取得
// 			const get_src = images[index];
// 			// それをtarget_imageのsrcに代入
// 			target_image.setAttribute('src',get_src);

// 			// ボタンの処理
// 			if (target_image.getAttribute('src') === images[0]) {
// 				prev.style.visibility = 'hidden';
// 				next.style.visibility = 'visible';
// 			} else if (target_image.getAttribute('src') === images[3]) {
// 				prev.style.visibility = 'visible';
// 				next.style.visibility = 'hidden';
// 			} else {
// 				prev.style.visibility = 'visible';
// 				next.style.visibility = 'visible';
// 			}
// 		});
// 	}

// 	next.addEventListener('click', () => {
// 		// 表示されている画像のsrcを取得
// 		const src = target_image.getAttribute('src');
// 		// そのインデックス番号を取得
// 		let new_index = Array.prototype.indexOf.call(images, src);
// 		// その隣のインデックス番号を取得
// 		let next_index = new_index + 1;
// 		// そのインデックス番号のsrcを取得
// 		const new_src = images[next_index];
// 		// それをtarget_imageのsrc代入
// 		target_image.setAttribute('src', new_src);

// 		// ボタンの処理
// 		prev.style.visibility = 'visible';
// 		next.style.visibilityy = 'visible';

// 		if (target_image.getAttribute('src') === images[3]) {
// 			next.style.visibility = 'hidden';
// 		} 

// 	});

// 	prev.addEventListener('click', () => {
// 		// 表示されている画像のsrcを取得
// 		const src = target_image.getAttribute('src');
// 		// そのインデックス番号を取得
// 		let new_index = Array.prototype.indexOf.call(images, src);
// 		// その隣のインデックス番号を取得
// 		let next_index = new_index - 1;
// 		// そのインデックス番号のsrcを取得
// 		const new_src = images[next_index];
// 		// それをtarget_imageのsrc代入
// 		target_image.setAttribute('src', new_src);

// 		// ボタンの処理
// 		prev.style.visibility = 'visible';
// 		next.style.visibilityy = 'visible';

// 		if (target_image.getAttribute('src') === images[0]) {
// 			prev.style.visibility = 'hidden';
// 			next.style.visibility = 'visible';
// 		} 
// 	});
// }
