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
		// touchmove タッチポイントを動かした時
		// touchstart タッチを開始した時
		// touchend タッチを終了した時
		// passive:false preventdefailtを無視
		if(isMobile.any) {
			document.addEventListener('touchmove', _eMouseMove, {passive:false});
			document.addEventListener('touchstart', _eMouseDown, {passive:false});
			document.addEventListener('touchend', _eMouseUp, {passive:false});
		} else {
			$(window).on('mousemove', _eMouseMove).on('mousedown', _eMouseDown).on('mouseup', _eMouseUp);
			// window.addEventListener('mousemove', _eMouseMove);
			// window.addEventListener('mousedown', _eMouseMove);
			// window.addEventListener('mouseup', _eMouseMove);
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
		} else {
			// マウスを押してないときの移動量は0
			mouse.dist.x = 0;
			mouse.dist.y = 0;
		} 

		// 滑らかに移動させるためにイージングをつける
		// イージングの公式 (目的地の座標-現在地の座標)*イージング係数＝現在地の座標
		const ease = 0.15;
		param.x += (mouse.dist.x - param.x) * ease;
		param.y += (mouse.dist.y - param.y) * ease;

		//ターゲットの移動量を更新
		TweenMax.set(tg, {
			x:param.x,
			y:param.y
		});

		window.requestAnimationFrame(update);

	}

    // マウスを動かした時
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
	
	// マウスを押したとき
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



}