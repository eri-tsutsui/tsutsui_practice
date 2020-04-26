'use strict';
{
	const wrapper = document.querySelector('.wrapper');
	const dots = document.querySelectorAll('.dot');
	const params = [
		{ang:random(0,360),speed:random(1,3)},
		{ang:random(0,360),speed:random(1,3)},
		{ang:random(0,360),speed:random(1,3)},
		{ang:random(0,360),speed:random(1,3)},
		{ang:random(0,360),speed:random(1,3)},
		{ang:random(0,360),speed:random(1,3)},
		{ang:random(0,360),speed:random(1,3)},
		{ang:random(0,360),speed:random(1,3)},
		{ang:random(0,360),speed:random(1,3)},
		{ang:random(0,360),speed:random(1,3)}
	];


	// 毎フレームごとに実行
	window.requestAnimationFrame(update);

	//変数定義
	function update () {

		// 画面サイズ
		const sw = window.innerWidth;
		const sh = window.innerHeight;

		wrapper.style.perspective = map(Math.cos(radian(params[5].ang)), 50, 500, -1, 1) + 'px';

		for (let i = 0; i < dots.length; i ++) {

			// 画面の真ん中基準にする		
			const center = {
				x: sw * (i / dots.length),
				y: sh * 0.5 + Math.sin(radian(params[9].ang + i * (360 / dots.length))) * (sh * 0.3)
			}


			const scaleX = map(Math.sin(radian(params[0].ang)), 1, 2, -1, 1);
			const scaleY = map(Math.cos(radian(params[1].ang)), 1, 2, -1, 1);

			const rotX = map(Math.cos(radian(params[2].ang)), -90, 90, -1, 1);
			const rotY = map(Math.sin(radian(params[3].ang)), -90, 90, -1, 1);
			const rotZ = map(Math.cos(radian(params[4].ang)), -90, 90, -1, 1);

			// 動く範囲
			const radius = sh * 0.1;
			const ofX = Math.cos(radian(params[6].ang)) * radius; //x軸方向の動く範囲
			const ofY = Math.sin(radian(params[7].ang)) * radius; //y軸方向の動く範囲


			TweenMax.set(dots[i], {
				x:center.x + ofX,
				y:center.y + ofY,
				scaleX:scaleX,
				scaleY:scaleY,
				rotationX:rotX,
				rotationY:rotY,
				rotationX:rotZ,
			});
		}

		params.forEach(param => {
			param.ang += param.speed * 2;
		});
		
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
