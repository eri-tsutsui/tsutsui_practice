'use strict';
{
	const arr = [];

	const objs = document.querySelectorAll('.obj');

	init();

	// 初期設定
	function init () {

		const sw = window.innerWidth;
		const sh = window.innerHeight;

		for (let i = 0; i < objs.length; i ++) {

			const el = objs[i];

			// 大きさ、位置ランダム
			const x = random(0, sw * 0.7);
			const y = random(0, sh * 0.7);
			TweenMax.set(el, {
				width:random(sw * 0.1, sw * 0.3),
				height:random(sh * 0.1, sh * 0.3)
			});

			// 移動の方向をバラバラ
			let kakeX = 0;
			let kakeY = 0;
			if (random(0, 1) > 0.5) {
				kakeX = random(-1, 1);
			} else {
				kakeY = random(-1, 1);
			}

			// 赤い四角形の情報（中身は空）
			const o = {
				kakeX: kakeX,
				kakeY: kakeY,
				tgX: x, //最終目的地
				tgY: y,
				x: x, //現在座標
				y: y,
				el: el
			};

			arr.push(o);
		}

		update();

	}

	window.requestAnimationFrame(update);

	function update () {

		const sw = window.innerWidth;
		const sh = window.innerHeight;
		const h = document.documentElement.scrollHeight; // ページ全体の高さ

		// スクロール位置(スクロール量)
		const scroll = window.pageYOffset;

		//スクロール進捗率0~1
		var scrollP = scroll / (h - sh);

		for (let i = 0; i < arr.length; i ++) {
			// 進捗率1で目標値になるようにする
			const o = arr[i];

			// イージングさせるのでこっちを更新(動きながら登場してくるアニメーション)
			const tgX = o.tgX + (o.kakeX * sw * (1 - scrollP));
			const tgY = o.tgY + (o.kakeY * sh * (1 - scrollP));

			//↑進捗率が1のとき、tgX = o.tgXとなる
			// つまり、tgXの値少しずつ減っていくイメージ 700から600になるとか

			o.x += (tgX - o.x) * 0.1; // 現在地上から最終目的地までの距離 * 0.1 ずつ進んでいく
			o.y += (tgY - o.y) * 0.1;

			TweenMax.set(o.el, {
				x: o.x,
				y: o.y,
				opacity: scrollP
			});

		}

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