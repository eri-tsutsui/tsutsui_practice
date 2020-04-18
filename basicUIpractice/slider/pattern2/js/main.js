'use strict';
{
	const slider = document.getElementById('slider');
	const sliderList = document.getElementById('slider-list');
	const slides = document.querySelectorAll('.slider-item');
	const length = slides.length;
	const indicator = document.getElementById('indicator');
	const prev = document.getElementById('prev');
	const next = document.getElementById('next');
	let currentIndex = 0;
	let Anchors = ''; //あとで文字列をいれるので、空の文字列を入れておく
	let timer; //あとで関数をいれる

	// ---------------------------------------------------------
	// スライドをleftを使って配置
	// インジケータのアンカーを作成
	// ---------------------------------------------------------

	for (let i = 0; i < length; i ++) {
		slides[i].style.left = 100 * i + '%';
		Anchors += '<a href="#">' + (i + 1) + '</a>';
	}

	indicator.insertAdjacentHTML('afterbegin', Anchors);

	const indicatorAnchors = indicator.querySelectorAll('a');


	// ---------------------------------------------------------
	// インデックス番号に応じて表示するスライドを決定する処理
	// ---------------------------------------------------------

	function goToSlide (index) {
		sliderList.style.left = -100 * index + '%';
		currentIndex = index;
		// ナビとインジゲーターを更新
		updateNavandIndicator();
	}

	function updateNavandIndicator () {
		// prevとnextの非表示切り替え
		if (currentIndex === 0) {
			prev.classList.add('disable');
		} else {
			prev.classList.remove('disable');
		}

		if (currentIndex === length - 1) {
			next.classList.add('disable');
		} else {
			next.classList.remove('disable');
		}

		// インジゲーターの色の更新
		indicatorAnchors.forEach(indicatorAnchor => {
			indicatorAnchor.classList.remove('active');
		});
		indicatorAnchors[currentIndex].classList.add('active');
	}

	// ---------------------------------------------------------
	// クリック時の処理
	// ---------------------------------------------------------

	// ナビをクリックした時、スライドを動かす
	prev.addEventListener('click', () => {
		goToSlide(currentIndex - 1);
	})
	next.addEventListener('click', () => {
		goToSlide(currentIndex + 1);
	})

	// インジゲーターをクリックした時、スライドを動かす
	for (let i = 0; i < indicatorAnchors.length; i ++) {
		indicatorAnchors[i].addEventListener('click', e => {
			e.preventDefault();
			const target = e.target;
			const index = Array.prototype.indexOf.call(indicatorAnchors, target);
			if(!target.classList.contains('active')) {
				goToSlide(index);
			}
		});
	}

	// --------------------------------------------------------------
	// オートプレイの処理（マウスが載っているかどうかで処理を分ける）
	// --------------------------------------------------------------

	// 関数を定義
	function startAutoPlay () {
		timer = setInterval( () => {
			const nextIndex = (currentIndex + 1) % length;
			goToSlide(nextIndex);
		}, 7500);
	}

	function stopAutoPlay () {
		clearInterval(timer);
	}

	// マウスが乗った時、オートプレイを止める
	// マウスが乗った時、オートプレイを再生
	slider.addEventListener('mouseenter', () => {
		stopAutoPlay();
	})
	slider.addEventListener('mouseleave', () => {
		startAutoPlay();
	})

	// --------------------------------------------------------------
	// スライドショーの開始
	// --------------------------------------------------------------

	goToSlide(currentIndex);
	startAutoPlay();


}