'use strict';
{
	const span = document.querySelectorAll('span');
	const arr = [];

	init();

	// 初期設定
	function init () {

		for (let i = 0; i < span.length; i ++) {
			const el = span[i];

			// 移動の方向をバラバラ
			let kakeY = 1;
			if (i % 2 == 0) {
				kakeY *= -1;
			}

			// spanタグの情報
			const o = {
				kakeY:kakeY,
				y: 0,
				el: el
			}

			// 上の情報を持つspanを配列にいれる
			arr.push(o);
		}

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


		for (let i = 0; i < arr.length; i ++) {
			const o = arr[i];

			// スクロール進捗率を順番に分配する
			const size = 1 / arr.length;
			const offset = 0.8; // 目標地点の到達する前に次のアルファベットが現れる
			const p = map(scrollP, 0, 1, size * offset * i, size * i + size); // インデックス番号により進捗率が異なるので相対的な値に変更　例えば、[1]->0.08〜0.2, [2]->0.16~0.3

			const tgY = o.kakeY * sh * 0.5 * (1 - p);
			o.y += (tgY - o.y) * 0.1;

			TweenMax.set(o.el, {
				y:o.y,
				opacity:p //最初は見えないようにするため
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