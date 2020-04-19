'use strict';
{
	const header = document.getElementById('header');
	const headerChild = header.children[0]; //子要素を取得
	const headerChildClone = headerChild.cloneNode(true); //子要素を複製
	const headerClone = document.createElement('div'); //空のdivを作成
	const body = document.querySelector('body');
	const rect = header.getBoundingClientRect();
	const scrollY = window.scrollY; // ページトップからのスクロール量
	const headerOffsetTop = rect.top + scrollY; // rect.top : ビューポートにおけるページトップからの距離

	//------------------------------------------
	// headerCloneの生成
	//------------------------------------------

	headerClone.classList.add('header-clone'); //divにクラス名をつける
	headerClone.appendChild(headerChildClone); //divにheaderChildを挿入する
	body.appendChild(headerClone);

	//------------------------------------------
	// ヘッダーを切り替える処理
	//------------------------------------------

	//ウィンドウのスクロールイベントを監視
	//スクロールするごとに処理を実行
	function onScrollHandler () {
		if (window.scrollY > headerOffsetTop) {
			headerClone.style.top = '0';
		} else {
			headerClone.style.top = '-35px';
		}
	}

	window.addEventListener('scroll', onScrollHandler);
	
}