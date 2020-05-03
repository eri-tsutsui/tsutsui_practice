'use strict';
{
	const obj = document.querySelector('.obj');
	init();

	// 初期設定
	function init () {

	}

	// 毎フレーム実行
	window.requestAnimationFrame(update);

	function update () {
		
		// ステージサイズ
		const sw = window.innerWidth;
		const sh = window.innerHeight;
		const h = document.documentElement.scrollHeight;

		// スクロール位置
		const scroll = window.pageYOffset;

		// スクロール進捗率
		const scrollP = scroll / (h - sh);

		// 下にいくにつれ、色が変わる
		obj.style.backgroundColor = chroma.mix(0x7fb6a2, 0xc13d23, scrollP).css();

		window.requestAnimationFrame(update);

	}




	// ----------------------------------------
	// イベント 画面クリック
	// ----------------------------------------

	function _eClick(e) {
		rate = 0;

		if(e == null) {
			clickPos.x = random(0, window.innerWidth);
			clickPos.y = random(0, window.innerHeight);
		} else {
			clickPos.x = e.clientX;
			clickPos.y = e.clientY;
		}
	}

	// -------------------------------------
	// @val: 度
	// 度からラジアンに変換
	// -------------------------------------
	function radian (val) {
		return val * Math.PI / 180;
	}

	// -------------------------------------
	// @val: ラジアン
	// ラジアンから度に変換
	// -------------------------------------
	function degree (val) {
		return val * 180 / Math.PI;
	}


	// -------------------------------------
	// MinからMacまでランダムな値
	// -------------------------------------
	function random(min, max) {
		return Math.random() * (max - min) + min;
	}



}