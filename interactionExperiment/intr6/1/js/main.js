'use strict';
{






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