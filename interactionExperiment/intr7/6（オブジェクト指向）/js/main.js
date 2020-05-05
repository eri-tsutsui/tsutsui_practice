'use strict';
{
	const Item = function(el) {
		
	}

    // マウスを動かした時（タッチして指を動かすたびに）、座標を取得する
	function _eMouseMove (e) {
		if(isMobile.any) {
			event.preventDefault();
			const touches = event.touches;
			if(touches != null && touches.length > 0) {
				mouse.x = touches[0].pageX;
				mouse.y = touches[0].pageY;
			}
		} else {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		}
	}
	
	// タッチしたとき
	function _eMouseDown (e) {

		//もし画面が押されていなかったら
		if(!mouse.isDown) {
			mouse.isDown = true;
			if(isMobile.any) {
				event.preventDefault();
				const touches = event.touches;
				if(touches != null && touches.length > 0) {
					mouse.start.x = mouse.x = touches[0].pageX;
					mouse.start.y = mouse.y = touches[0].pageY;
				}
			} else {
				mouse.start.x = e.clientX;
				mouse.start.y = e.clientY;
			}
		}
	}

	// タッチを終了したとき
	function _eMouseUp(e) {
		mouse.isDown = false;
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

	// ----------------------------------------
	// 範囲変換
	// @val     : 変換したい値
	// @toMin   : 変換後の最小値
	// @toMax   : 変換後の最大値
	// @fromMin : 変換前の最小値
	// @fromMax : 変換前の最大値
	// ----------------------------------------
	function map(val, toMin, toMax, fromMin, fromMax) {
	if(val <= fromMin) {
		return toMin;
	}
	if(val >= fromMax) {
		return toMax;
	}
	const p = (toMax - toMin) / (fromMax - fromMin);
	return ((val - fromMin) * p) + toMin;
	}


}