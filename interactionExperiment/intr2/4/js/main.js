'use strict';
{
	const target = document.getElementById('ball');
	
	const paramX = {
		angle:random(0, 360),
		speed:-1.8
	}

	const paramY = {
		angle:random(0, 360),
		speed: 3.2
	}

	const paramZ = {
		angle:random(0, 360),
		speed: 2.5
	}

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
		const radius = sh * 0.2;

		// 角度をランダムに渡す
		const z = Math.sin(radian(paramZ.angle)) * radius;
		const x = Math.sin(radian(paramX.angle)) * radius;
		const y = Math.cos(radian(paramY.angle)) * radius;

		TweenMax.set(target, {
			x: center.x + x,
			y: center.y + y,
			z: z
		});

		paramZ.angle += paramZ.speed;
		paramX.angle += paramX.speed;
		paramY.angle += paramY.speed;

		
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
