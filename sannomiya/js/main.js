"use strict";
{

	//-------------------------------------------------------
	// 要素の取得
	//-------------------------------------------------------
	
	const modal = document.getElementById('modal');
	const prev = document.getElementById('arrow-left');
	const next = document.getElementById('arrow-right');
	const images = document.querySelectorAll('.main-item img');
	let modalTxt = document.getElementById('modal-txt');
	let modalImg = document.getElementById('modalImage');
	let currentIndex = 0;
	let target;
	let targetSrc;
	let targetTxt;
	let index;
	let targetWidth;
	let targetHeight;
	let targetRatio;

	//-------------------------------------------------------
	// 処理内容
	//-------------------------------------------------------

	//クリックでモーダルに写真表示
	for (let i = 0; i < images.length; i ++) {
		images[i].addEventListener('click', e => {

			// モーダルを表示
			modal.classList.add('active');

			// 変数更新
			target = e.target;
			targetSrc = target.getAttribute('src');
			targetTxt = target.getAttribute('data-text');
			index = Array.prototype.indexOf.call(images, target);
			targetWidth = target.clientWidth;
			targetHeight = target.clientHeight;
			targetRatio = targetWidth / targetHeight; 

			// モーダルに写真を表示
			showImg();

		});
	}

	// ナビをクリックして写真を切り替え
	prev.addEventListener('click', () => {
		index = index - 1;
		showImg();
	});
	next.addEventListener('click', () => {
		index = index + 1;
		showImg();
	});

	// ウィンドウをリサイズした時のレスポンシブ対応
	window.addEventListener('resize',() => {

		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		windowRatio = windowWidth / windowHeight;

		// 100ミリ秒後に画像サイズを変更
		let timer = -1;		
		clearTimeout(timer);
		timer = setTimeout(changeSize, 100);
		
	});

	// モーダルの閉じるボタン
	const modalClose = document.getElementById('modal-close');

	modalClose.addEventListener('click', () => {
		modal.classList.remove('active');
	});

	//-------------------------------------------------------
	// 関数定義
	//-------------------------------------------------------

	// showImg()定義
	function showImg () {
		// インデックス番号の変更に伴い変数更新
		// 表示する画像を変更する処理
		currentIndex = index;
		target = images[index];
		targetTxt = target.getAttribute('data-text');
		targetSrc = target.getAttribute('src');
		modalImg.setAttribute('src', targetSrc);
		modalTxt.textContent = targetTxt;
		targetWidth = target.clientWidth;
		targetHeight = target.clientHeight;
		targetRatio = targetWidth / targetHeight;
		// 画像とウィンドウ幅のアスペクト比を比べ、画像の大きさの処理を場合わけ
		changeSize();
		// 最初と最後の画像が表示されているときアローを消す処理
		updateNav();
	}

	// changeSize()定義
	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;
	let windowRatio = windowWidth / windowHeight;

	function changeSize () {
		// 横長写真の場合
		if (targetRatio > 1 && targetRatio > windowRatio) {
			modalImg.style.width = '100%';
			modalImg.style.height = 'auto';
		} else if (targetRatio > 1 && targetRatio < windowRatio) {
			modalImg.style.width = 'auto';
			modalImg.style.height = '100%';
			modalImg.style.maxWidth = 'initial';
		}
		// 縦長写真の場合
		if (targetRatio < 1 && targetRatio > windowRatio) {
			modalImg.style.width = '100%';
			modalImg.style.height = 'auto';
		} else if (targetRatio < 1 && targetRatio < windowRatio) {
			modalImg.style.width = 'auto';
			modalImg.style.height = '100%';
			modalImg.style.maxWidth = 'initial';
		}
	}

	// updateNav()定義
	function updateNav () {
		if (currentIndex === 0) {
			prev.classList.add('disable');
		} else {
			prev.classList.remove('disable');
		}
		if ( currentIndex === images.length - 1) {
			next.classList.add('disable');
		} else {
			next.classList.remove('disable');
		}
	}

	// 終わり

}



