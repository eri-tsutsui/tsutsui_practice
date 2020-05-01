'use strict';
{

	// 球体の情報を作成するための器
	const param = [];

	// マウスの初設定
	const mouse = {
		x:0,
		y:0,
		clientX:0,
		clientY:0
	};

	const tg = document.querySelectorAll('.js-tg');

	init();

	function init () {

		//マウスの位置は真ん中とする
		// だからはじめは、球体は真ん中に集まっては消えるという動作を繰り返す
		mouse.x = mouse.clientX = window.innerWidth * 0.5;
		mouse.y = mouse.clientY = window.innerHeight * 0.5;

		for (let i = 0; i < tg.length; i ++) {

			const obj = {
				rate: 0,            // 最終目標値までの進捗度
				posTg: {x:0, y:0},  // 最終目標位置
				posNow: {x:0, y:0}, // 現在位置
				el: tg[i],
				scale: 1,
				angle: 0
			}

			// objに値を設定し、球体のアニメーションのスピードをインデックス番号により少しずらす
			reset(obj, i * 0.1);

		   // param配列の中に上記の情報をいれる
			param.push(obj);
			
		}

		window.addEventListener('mousemove', _eMouseMove);

	}

	// マウスを動かした時マウスの座標を更新する
	function _eMouseMove (e) {
		mouse.clientX = e.clientX;
		mouse.clientY = e.clientY;
	}



	function reset (obj, delay) {

		const sw = window.innerWidth
  		const sh = window.innerHeight

		obj.rate = 0;
		obj.posNow.x = random(0, sw);
		obj.posNow.y = random(0, sh);
		obj.posTg.x = random(0, sw);
		obj.posTg.y = random(0, sh);
		obj.scale = random(0.5, 1.5);
		obj.angle = 0;

		// rate値をアニメーション
		const duration = random(0.5, 1.5);
		TweenMax.killTweensOf(obj);
		TweenMax.to(obj, duration, {
			rate: 1,
			angle: 180,
			ease:Power1.easeOut,
			delay: delay
		});

	}


	window.requestAnimationFrame(update);

	function update () {

		const sw = window.innerWidth
  		const sh = window.innerHeight

		const ease = 0.08;

		mouse.x += (mouse.clientX - mouse.x) * 0.2;
		mouse.y += (mouse.clientY - mouse.y) * 0.2;

		for (let i = 0; i < param.length; i ++) {

			// 進捗度を使って、寄り道しつつ最終的にクリックした位置へ行くように
			// 寄り道位置はマウス

			const obj = param[i];

			if (obj.rate > 0) {
				const tgX2 = map(mouse.x, -sw * 0.5, sw * 1.5, 0, sw);
				const tgY2 = map(mouse.y, -sh * 0.5, sh * 1.5, 0, sh);

				const tgX = (tgX2 * (1 - obj.rate)) + (obj.posTg.x * obj.rate);
				const tgY = (tgY2 * (1 - obj.rate)) + (obj.posTg.y * obj.rate);
				obj.posNow.x += (tgX - obj.posNow.x) * ease;
				obj.posNow.y += (tgY - obj.posNow.y) * ease;
			}

			TweenMax.set(obj.el, {
				x: obj.posNow.x,
				y:obj.posNow.y,
				scale:obj.scale,
				opacity:map(Math.sin(radian(obj.angle)), 0, 1, 0, 1)
			});

		    // だいたい1に近づいたら目標値変更
			if(Math.abs(1 - obj.rate) < 0.005) {
				reset(obj, random(0, 0.5));
			}

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