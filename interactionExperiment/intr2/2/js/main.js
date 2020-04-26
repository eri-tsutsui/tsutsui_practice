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
		const radius = sh * 0.5;

		// angleをラジアンに変換
		const rad = radian(angle);

		// Math.sin(数値)は-1から1までを返す
		// radiusをかけることで、画面中央から-radius ~ radiusの範囲で行ったり来たりする

		TweenMax.set(target, {
			x: center.x + Math.sin(rad) * radius, // 真ん中の表から-radius ~ radiusの範囲でX軸上を行ったりきたりする
			y: center.y, 
			z: Math.cos(rad) * radius // -radius ~ radiusの範囲でz軸を行ったりきたり
		});

		angle += 2;

		window.requestAnimationFrame(update);
	}

	// 度からラジアンに変更
	// @val：度
	function radian(val) {
		return val * Math.PI / 180;
	}

	// ラジアンから度に変更
	// @val：ラジアン
	function degree(val) {
		return val * 180 / Math.PI;
	}

}