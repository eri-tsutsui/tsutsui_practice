'use strict';
{
	const param = {
		x:0,
		y:0
	}

	const mouse = {
		isDown:false, // 画面が押されているか
		x:0, // マウスの位置X
		y:0, // マウスの位置Y
		start:{x:0, y:0}, // マウスダウン時の座標
		dist:{x:0, y:0} // マウスダウンしてからの移動距離
	}

	init();

	function init () {
		// isMobile.any = スマホ・タブレットからのアクセスの場合
		// touchmove タッチされた後、指を画面上で動かす度に発生
		// touchstart タッチが開始された瞬間に発生
		// touchend タッチを終了した時
		// passive:false preventdefailtを無視
		if(isMobile.any) {
			document.addEventListener('touchmove', _eMouseMove, {passive:false});
			document.addEventListener('touchstart', _eMouseDown, {passive:false});
			document.addEventListener('touchend', _eMouseUp, {passive:false});
		} else {
			$(window).on('mousemove', _eMouseMove).on('mousedown', _eMouseDown).on('mouseup', _eMouseUp);
		}

		update();
	} 

	window.requestAnimationFrame(update);

	function update () {

		const tg = document.querySelector('.js-tg');

		if(mouse.isDown) {

			//マウスを押している時はマウスダウン時からのマウス移動量を計算
			const dx = mouse.x - mouse.start.x;
			const dy = mouse.y - mouse.start.y;
			mouse.dist.x = dx;
			mouse.dist.y = dy;

			// ##########################################################
			const friction = 0.3; // 摩擦係数
			mouse.dist.x *= friction;
			mouse.dist.y *= friction;
			// ##########################################################

		} else {
			// マウスを押してないときの移動量は0
			mouse.dist.x = 0;
			mouse.dist.y = 0;
		} 

		// 滑らかに移動させるためにイージングをつける
		// イージングの公式 (目的地の座標-現在地の座標)*イージング係数＝現在地の座標
		// イージング係数が小さいとゆっくり
		const ease = 0.125;
		param.x += (mouse.dist.x - param.x) * ease;
		param.y += (mouse.dist.y - param.y) * ease;

		// 中心からの距離
		// Math.sqrtは平方根を返す=＞ルートがつく
		const d = Math.sqrt(param.x * param.x + param.y * param.y);

		//ターゲットの移動量を更新
		//角度や色を変えて隠し味
		TweenMax.set(tg, {
			rotationZ:radian(param.x * param.y) * 0.1,
			scaleX:1 + Math.abs(param.x) * 0.001,
			scaleY:1 + Math.abs(param.y) * 0.001,
			x:param.x,
			y:param.y,
			backgroundColor:chroma.scale([0x262558, 0x96782c])(map(d, 0, 1, 0, window.innerWidth * 0.25)).css()
		});

		window.requestAnimationFrame(update);

	}

    // マウスを動かした時（タッチして指を動かすたびに）、座標を取得する
	function _eMouseMove (e) {
		if(isMobile.any) {
			event.preventDefault();
			const touches = event.touches;
			if(touches != null && touches.length > 0) {
				mouse.x = touches[0].pageX;
				mouse.y = touches[0].pageY;
			}
		} else {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		}
	}
	
	// タッチしたとき
	function _eMouseDown (e) {

		//もし画面が押されていなかったら
		if(!mouse.isDown) {
			mouse.isDown = true;
			if(isMobile.any) {
				event.preventDefault();
				const touches = event.touches;
				if(touches != null && touches.length > 0) {
					mouse.start.x = mouse.x = touches[0].pageX;
					mouse.start.y = mouse.y = touches[0].pageY;
				}
			} else {
				mouse.start.x = e.clientX;
				mouse.start.y = e.clientY;
			}
		}
	}

	// タッチを終了したとき
	function _eMouseUp(e) {
		mouse.isDown = false;
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