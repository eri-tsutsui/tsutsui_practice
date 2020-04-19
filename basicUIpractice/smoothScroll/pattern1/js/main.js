'use strict';
{
	const header = document.getElementById('header');
	const rect = header.getBoundingClientRect();
	const scrollY = window.scrollY; // ページトップからのスクロール量
	const headerOffsetTop = rect.top + scrollY; // rect.top : ビューポートにおけるページトップからの距離
	console.log(scrollY);
	console.log(headerOffsetTop);

	//ウィンドウのスクロールイベントを監視
	//スクロールするごとに処理を実行→window.scrollYの量はスクロールするたびに更新される
	function onScrollHandler () {
		if (window.scrollY > headerOffsetTop) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
	}

	window.addEventListener('scroll', onScrollHandler);
	
}