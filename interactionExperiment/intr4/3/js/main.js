'use strict';
{
	const param = [];
	const tg = document.querySelectorAll('.js-tg');

	init();

	// 初期設定

	function init () {

		for (let i = 0; i < tg.length; i ++) {

			const obj = {
				rate: 0, // 最終目標値までの進捗度
				posTg2:{x:0, y:0}, // 最終目標位置
				posTg1:{x:0, y:0}, // 寄り道位置
				posNow:{x:0, y:0}, // 現在位置
				el:tg[i],
				scale:1,
				isStart:false
			}

			reset(obj, i * 0.3);
			param.push(obj);
		}

	}

	// リセット
	function reset(obj, delay) {

		const sw = window.innerWidth;
		const sh = window.innerHeight;

		obj.rate = 0;

		obj.posNow.x = random(sw * 0.25, sw * 0.75);
		obj.posNow.y = sh * 1.25; // 画面下よりさらに下

		 // 最終目標値は画面外へ
		 obj.posTg2.x = sw * 0.5;
		 obj.posTg2.y = -sh * 0.2;

		 // 寄り道（一回だけウニっと曲がる＝寄り道ポイント）
		 const range = 1;
		 obj.posTg1.x = obj.posNow.x + random(-sw * range, sw * range); // たまに画面外にはみ出す
		 obj.posTg1.y = random(sh * 0.4, sh * 0.6);

		 // スケールのランダム
		obj.scale = random(0.5, 1);

		 // rate値をアニメーション
		TweenMax.killTweensOf(obj); // 引数に指定したオブジェクトのトゥイーンを終了させる　http://cda244.com/2009/02/27-238/
		TweenMax.to(obj, 1, { // http://un-tech.jp/tweenmax-started/
			rate:1,
			ease:Power3.easeOut,
			delay:delay
		})

	}


	window.requestAnimationFrame(update);

	function update () {

		const ease = 0.08 // イージング

		for (let i = 0; i < param.length; i ++) {

			const obj = param[i];

			if (obj.rate > 0) {
				// 進捗度を使って、posTg1に寄り道しつつ最終的にposTg2へ行くように
				const tgX = (obj.posTg1.x * (1 - obj.rate)) + (obj.posTg2.x * obj.rate);
				const tgY = (obj.posTg1.y * (1 - obj.rate)) + (obj.posTg2.y * obj.rate);
				
				obj.posNow.x += (tgX - obj.posNow.x) * ease;
				obj.posNow.y += (tgY - obj.posNow.y) * ease;
			
			}

			// DOM更新
			TweenMax.set(obj.el, {
				x:obj.posNow.x,
				y:obj.posNow.y,
				scale:obj.scale
			});

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



}