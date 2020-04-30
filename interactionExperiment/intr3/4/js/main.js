'use strict';
{
	// 動かすオブジェクト
	const dots = document.querySelectorAll('.dot');
	let tgList = [];

	// 初期設定
	init();

	function init () {

		for (let i = 0; i < dots.length; i ++) {

			// ステージサイズ
			const sw = window.innerWidth;
			const sh = window.innerHeight;

			// 位置のばらつき
			const xrange = 0.3;
			const yrange = 0.3;
			const zrange = 0.3;

			// 速度
			const xspeed = 1.0;
			const yspeed = 1.0;
			const zspeed = 1.0;

			// 全体のはやさ
			const allSpeed = 0.75;

			// 大きさのばらつき
			const scaleMin = 0.2;
			const scaleMax = 1;

			// 動かすオブジェクトの管理
			// 配列の中にオブジェクトを追加
			// 8: {el: div.dot, x: -64.7901594948863, y: -47.952803539361696, z: 77.37055267977138, speedX: 2.0470674688590043, …} のような内容のオブジェクトが生成される
			tgList.push({
				el: dots[i],
				x: random(-sw * xrange, sw * xrange),
				y: random(-sh * yrange, sh * yrange),
				z: random(-sh * zrange, sh * zrange),
				speedX: random(1, 4) * xspeed * allSpeed,
				speedY: random(1, 4) * yspeed * allSpeed,
				speedZ: random(1, 4) * zspeed * allSpeed,
				scale: random(scaleMin, scaleMax)
			});
		}
	}

	// 毎フレーム実行
	window.requestAnimationFrame(update);

	function update () {
		
		for(let i = 0; i < tgList.length; i ++) {
			const o = tgList[i];
			rotateX(o, radian(o.speedX));
			rotateY(o, radian(o.speedY));
			rotateZ(o, radian(o.speedZ));

			TweenMax.set(o.el, {
				scale: o.scale,
				x: o.x + window.innerWidth * 0.5, // 中心にセット
				y: o.y + window.innerHeight * 0.5, // 中心にセット
				z: o.z
			});
		}

		window.requestAnimationFrame(update);

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


}