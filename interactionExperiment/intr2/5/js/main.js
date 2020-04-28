'use strict';
{
	const dots = document.querySelectorAll('.dot');
	let angle1 = 0;
	// let angle2 = 0;

	// 毎フレームごとに実行
	window.requestAnimationFrame(update);

	//変数定義
	function update () {

		// 画面サイズ
		const sw = window.innerWidth;
		const sh = window.innerHeight;

		// 動く範囲
		const radius = sh * 0.4;

		for(let i = 0; i < dots.length; i ++) {
			// 画面の真ん中基準にする
			const center = {
				x: sw * 0.5 - dots[i].clientWidth * 0.5,
				y: sh * 0.5 - dots[i].clientHeight * 0.5
			}

			// ドットの位置を決めるための角度
			const ang = angle1 + i * (360 / dots.length);

			const x = center.x + Math.sin(radian(ang)) * radius;
			const y = center.y + Math.cos(radian(ang)) * radius;

			TweenMax.set(dots[i], {
				x: x,
				y: y,
			});
		}

		angle1 += 1;
		// angle2 += 4;
		
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

	// minからmaxまでのランダムな数
	function random (min, max) {
		return Math.random() * (max - min) + min; 
	}

}
