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

	const inner = document.querySelectorAll('.inner');

	init();

	function init () {

		//マウスの位置は真ん中とする
		// だからはじめは、球体は真ん中に集まっては消えるという動作を繰り返す
		mouse.x = mouse.clientX = window.innerWidth * 0.5;
		mouse.y = mouse.clientY = window.innerHeight * 0.5;

		for (let i = 0; i < inner.length; i ++) {

			const o = {
				rate: 0,            
				now: {x:0, y:0},    
				tg1: {x:0, y:0},    
				tg2: {x:0, y:0},    
				color:chroma.random().css(),
				edgeColor:chroma.random().css(),
				el: inner[i],
			}

			reset(o);
			param.push(o);
			
		}

		window.addEventListener('mousemove', _eMouseMove);

	}

	// マウスを動かした時マウスの座標を更新する
	function _eMouseMove (e) {
		mouse.clientX = e.clientX;
		mouse.clientY = e.clientY;
	}

	// リセット
	function reset (obj) {

		const sw = window.innerWidth;
  		const sh = window.innerHeight;

		// 値をセット
		obj.rate = 0; //進捗
		obj.now.x = random(0, sw); //現在位置
		obj.now.y = sh;

		obj.tg1.x = random(0, sw); //最終目標値
		obj.tg1.y = sh * 0.5; 

		obj.tg2.x = sw * 0.5; 
		obj.tg2.y = 0;

		obj.color = chroma.random().css();
		obj.edgeColor = chroma(obj.color).brighten(10).css();

		// rate値をアニメーション（0から1に増やす）
		const duration = 1.5;
		TweenMax.killTweensOf(obj);
		TweenMax.to(obj, duration, {
			rate: 1, // 0から1に増やす
			ease: Power1.easeOut,
			delay: 0
		});

	}

	// アニメーションの内容
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

			const o = param[i];

			const tgX = o.tg1.x * (1 - o.rate) + o.tg2.x * o.rate;
			const tgY = o.tg1.y * (1 - o.rate) + o.tg2.y * o.rate;

			o.now.x += (tgX - o.now.x) * ease;
			o.now.y += (tgY - o.now.y) * ease;

			const range = 90;

			const ang = (o.now.x, -range, range, 0, sw);

			const pct = 100 - (o.now.y / sh) * 100;

			const grad = 'linear-gradient(' + ang + 'deg, ' + o.edgeColor + ' 0%, ';
			grad += o.color + ' ' + pct + '%, ';
			grad += o.edgeColor + ' 100%)';

			o.el.css( {
				background: grad
			});

			if(o.rate >= 1) {
				reset(o);
			}

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