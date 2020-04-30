'use strict';
{
	// 動かすオブジェクト
	const mv = document.querySelector('.mv');
	let tgList = [];
	let html;
	let dots;

	// 初期設定
	init();

	function init () {

		const num = 20;
		html = ''; // あとでタグを挿入
		const color = ['colorA', 'colorB', 'colorC', 'colorA'];
		const blend = ['blendA', 'blendB', 'blendC', 'blendD'];

		console.log(num);

		for (let i = 0; i < num; i ++) {
			html += '<div class="dot ' + blend[i%blend.length] + '"><div class="inner ' + color[i%color.length] + '"></div></div>'; 
			// 出力結果：<div class="dot blendA"><div class="inner colorA"></div></div>
		}

		mv.insertAdjacentHTML('beforeend', html); // mvの中に作ったdivタグ（ドット）を挿入
		dots = document.querySelectorAll('.dot'); 

		for (let i = 0; i < dots.length; i ++) {

			// ステージサイズ
			const sw = window.innerWidth;
			const sh = window.innerHeight;

			// 速度 
			let xspeed = 1.0;
			let yspeed = xspeed;
			let zspeed = xspeed;

			// 全体のはやさ
			const allSpeed = 1.0;

			// 大きさのばらつき
			const scaleMin = 1.0;
			const scaleMax = 1.0;

			const x = sw * 0.05;
			const y = x;
			const z = x;

			console.log(dots);

			// 動かすオブジェクトの管理
			// 配列の中にオブジェクトを追加
			tgList.push({
				el: dots[i],
				x: x,
				y: y,
				z: z,
				speedX: xspeed * allSpeed,
				speedY: yspeed * allSpeed,
				speedZ: zspeed * allSpeed,
				scale: random(scaleMin, scaleMax),
				angle: i * 13
			});

			console.log(tgList);
			console.log(x);

			
		}

	}

	// 毎フレーム実行
	window.requestAnimationFrame(update);

	function update () {

		const sw = window.innderWidth;
		const sh = window.innerHeight;

		for (let i = 0; i < tgList.length; i ++) {

			const o = tgList[i];
			rotateX(o, radian(o.speedX));
			rotateY(o, radian(o.speedY));
			rotateZ(o, radian(o.speedZ));

			// 位置・スケールを少し動かす
			o.angle += 5;
			const range = 0.075;
			const x = map(Math.sin(radian(o.angle)), -sw * range, sw * range, -1, 1);
			const y = map(Math.cos(radian(o.angle)), -sh * range, sh * range, -1, 1);
			const s = map(Math.sin(radian(o.angle)), 0, 0.25, -1, 1);

			TweenMax.set(o.el, {
				scale: o.scale + s,
				x:o.x + window.innerWidth * 0.5 + x, // 中心にセット
				y:o.y + window.innerHeight * 0.5 + y, // 中心にセット
				z:o.z
			});
		}

		

		window.requestAnimationFrame(update);

	}


	// ----------------------------------------
	// X軸の回転(ということは、x座標はそのままでy座標とz座標が変わる)
	// obj   : x,y,zの位置情報をもつオブジェクト
	// angle : 移動角度(ラジアン)
	// ----------------------------------------
	function rotateX(obj, angle) {

		const cos = Math.cos(angle);
		const sin = Math.sin(angle);

		const y = obj.y * cos - obj.z * sin;
		const z = obj.z * cos + obj.y * sin;

		obj.y = y;
		obj.z = z;

	}

	// ----------------------------------------
	// Y軸の回転
	// obj   : x,y,zの位置情報をもつオブジェクト
	// angle : 移動角度(ラジアン)
	// ----------------------------------------
	function rotateY(obj, angle) {

		const cos = Math.cos(angle);
		const sin = Math.sin(angle);

		const x = obj.x * cos - obj.z * sin;
		const z = obj.z * cos + obj.x * sin;

		obj.x = x;
		obj.z = z;

	}

	// ----------------------------------------
	// Z軸の回転
	// obj   : x,y,zの位置情報をもつオブジェクト
	// angle : 移動角度(ラジアン)
	// ----------------------------------------
	function rotateZ(obj, angle) {

		const cos = Math.cos(angle);
		const sin = Math.sin(angle);

		const x = obj.x * cos - obj.y * sin;
		const y = obj.y * cos + obj.x * sin;

		obj.x = x;
		obj.y = y;

	}

	// 度からラジアンに変更
	// @val：度
	function radian(val) {
		return val * Math.PI / 180;
	}

	// ラジアンから度に変更
	// @val：ラジアン
	function degree(val) {
		return val * 180 / Math.PI;
	}
	
	// ----------------------------------------
	// minからmaxまでランダム
	// ----------------------------------------
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