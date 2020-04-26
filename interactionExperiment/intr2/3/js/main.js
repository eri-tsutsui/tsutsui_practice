'use strict';
{
	const target = document.getElementById('ball');
	let angle = 0;

	// 毎フレームごとに実行
	window.requestAnimationFrame(update);

	//変数定義
	function update () {

		// 画面サイズ
		const sw = window.innerWidth;
		const sh = window.innerHeight;

		// 画面の真ん中基準にする
		const center = {
			x: sw * 0.5 - target.clientWidth * 0.5,
			y: sh * 0.5 - target.clientHeight * 0.5
		}

		// 動く範囲
		const radius = sh * 0.25;

		// 度をラジアンに変換
		const rad = radian(angle);

		// この-1〜1の値をいろいろな部分に使う
		const val = Math.sin(rad);

		// スケール(マイナスにならないようにする＝＞0.1~2)
		const scale = map(val, 0.1, 2, -1, 1);

		// 角度（-90 < rot < 90）
		const rot = map(val, -90, 90, -1, 1);

		TweenMax.set(target, {
			x: center.x,
			y: center.y,
			scale: scale,
			rotationZ: rot //Z軸を基準に回転
		});

		angle += 2;
		window.requestAnimationFrame(update);

	}

	// 度からラジアンへ変換
	function radian(val) {
		return val * Math.PI / 180;
	}

	//ラジアンから度に変換
	function degree(val) {
		return val * 180 / Math.PI;
	}

	//範囲変換
	// @val     : 変換したい値
	// @toMin   : 変換後の最小値
	// @toMax 	: 変換後の最大値
	// @fromMin : 変換前の最小値
	// @fromMax : 変換前の最大値
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
