'use strict';
{
	// 最終目標値までの進捗度
	let rate = 0;

	// 最終目標値
	const clickPos = {
		x: 0,
		y: 0
	}

	// 現在地
	const movePos = {
		x: 0,
		y: 0
	}

	init();

	function init () {

		// クリックしなかったらランダムに画面上を動く、クリックすると指定した座標
		const sw = window.innerWidth;
		const sh = window.innerHeight;

		//最終目標値はランダム
		clickPos.x = random(0, sw);
		clickPos.y = random(0, sh);

		window.addEventListener('click', _eClick);
	}

	window.requestAnimationFrame(update);

	function update () {
		const sw = window.innerWidth;
		const sh = window.innerHeight;
		const ease = 0.07 // イージング

		// 進捗度を1に近づける(0.07から少しずつ値が増えていく)
		rate += (1- rate) * ease; 

		// だいたい1に近づいたら目標値設定
		// (1-rate)はrateと逆でどんどん小さくなる
		// Math.absで絶対値を返す(結果的に値は同じだが、正の値を返す)　https://lab.syncer.jp/Web/JavaScript/Reference/Global_Object/Math/abs/
		if(Math.abs(1- rate) < 0.005) { // 言い換えると、”rateがほぼ1になった時”という意味
			_eClick(); // ランダムで移動しつづけるための処理
		}

		// 寄り道ターゲット
		const tg = document.querySelector('.js-tg');

		// 画面真ん中に寄り道
		const tgX = sw * 0.5;
		const tgY = sh * 0.5;

		// 動かす球
		const move = document.querySelector('.js-move');

		// 進捗度を使って、真ん中に寄り道しつつ最終的にクリックした位置へいくように
		const moveX = (tgX * (1 - rate)) + (clickPos.x * rate); // rateが1に近づくにつれ、clickPosに近づく、0だとtgX
		const moveY = (tgY * (1 - rate)) + (clickPos.y * rate);
		movePos.x += (moveX - movePos.x) * ease; // 移動距離分にeasingをかける
		movePos.y += (moveY - movePos.y) * ease; // 移動距離分にeasingをかける

		// DOM更新
		TweenMax.set(move, {
			x:movePos.x,
			y:movePos.y
		});

		TweenMax.set(tg, {
			x:tgX,
			y:tgY
		});

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