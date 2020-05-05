'use strict';
{
	const arr = [];
	const span = document.querySelectorAll('span');
	const mv = document.querySelector('.mv');

	init();

	function init() {
		for (let i = 0; i < span.length; i ++) {
			const el = span[i];

			let kake = 1;
			if (i % 2 == 0) {
				kake *= -1;
			}

			const o = {
				kake:kake,
				p:0,
				el:el
			}

			arr.push(o);
		}
	} 

	window.requestAnimationFrame(update);

	function update() {
		const sw = window.innerWidth;
		const sh = window.innerHeight;
		const h = document.documentElement.scrollHeight;

		// スクロール位置
		const scroll = window.pageYOffset;
		// var scrollTop = window.scrollY;

		// スクロール進捗率
		const scrollP = scroll / (h - sh);

		// 全体の背景色
		TweenMax.set(mv, {
			backgroundColor:chroma.mix(0x1b2920, 0xffffff, scrollP).css()
		});

		for (let i = 0; i < arr.length; i ++) {

			const o = arr[i];

			// スクロール進捗率を順番に分配してく
			const size = 1 / arr.length;
			const offset = 0.8; // ちょっと食い気味に入ってくるように
			const p = map(scrollP, 0, 1, size * offset * i, size * i + size);

			//複数動かしたいのでpをイージング
			o.p += (p - o.p) * 0.1;

			// 位置
			const y = o.kake * sh * 0.5 * (1 - o.p);

			// 角度
			const rotX = o.kake * 90 * (1 - o.p);
			const rotY = o.kake * 360 * (1 - o.p);
			const rotZ = o.kake * 60 * (1 - o.p);

			// スケール?
			const scale = map(o.p, 3, 1, 0, 1);

			//DOMに反映
			TweenMax.set(o.el, {
				rotationX:rotX,
				rotationY:rotY,
				rotationZ:rotZ,
				sccale:scale,
				y:y,
				opacity:o.p,
				color:chroma.mix(0x1b2b21, 0xb93133, o.p).css() // 色
			});

		}

		window.requestAnimationFrame(update);

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