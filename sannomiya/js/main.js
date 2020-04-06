"use strict";
{

	// 要素の取得
	let images = document.querySelectorAll('.main-item img');
	const modal = document.getElementById('modal');
	const modal_close = document.getElementById('modal-close');
	let modal_image = document.getElementById('modal-image');
	const arrow_left = document.getElementById('arrow-left');
	const arrow_right = document.getElementById('arrow-right');
	const modal_txt = document.getElementById('modal-txt');


	// ------------------------------------
	//
	// 以下、モーダル
	//
	// ------------------------------------
	
	// 写真とテキストを動的に変更する処理
	for(let i = 0; i < images.length; i ++) {

		// 写真をクリックした時に
		images[i].addEventListener('click', (e) => {	

			// modalにactiveクラスをつける
			modal.classList.add('active');
			
			// クリックした画像 + そのsrcとdata-textを取得する
			let target_img = event.target;
			let target_src = target_img.getAttribute('src');
	        const target_text = target_img.getAttribute('data-text');

			// #imgに取得したsrcを追記
			// #modal-txtに取得したdata-textの値を代入する
			modal_image.setAttribute('src', target_src); 
			modal_txt.textContent = target_text; 

			// ------------------------------------------------
			//
			// 以下、ウインドウ幅に応じて画像の表示サイズを変更
			//
			// ------------------------------------------------

			//要素を取得
			let w = window.innerWidth;
			let h = window.innerHeight;
			let target_width = modal_image.clientWidth;
			let target_height = modal_image.clientHeight;

			// ウインドウ幅に応じて画像の表示サイズを変える
			if (target_width >= w && target_height < h) {
				modal_image.style.width = '100%';
				modal_image.style.height = 'auto';
				modal_image.style.maxWidth = target_width;
			} else if (target_width >= w && target_height > h) {
				modal_image.style.width = 'auto';
				modal_image.style.height = '100%';
				modal_image.style.maxWidth = 'initial';
			}

			// ----------------------------------------------------------
			//
			// 以下、ブラウザ幅を変更した時、画像の幅をリアルタイムで変更	
			//
			// -----------------------------------------------------------

			// ウインドウ幅を変更した時、画像の幅をリアルタイムで変更する処理
			let timer = false;			

			// ウインドウ幅を変更した時に
			window.addEventListener('resize',() => {

				if (timer !== false) {
					clearTimeout(timer);
				}

				// 100ミリ秒後に画像サイズを変更
				timer = setTimeout(() => {
				
				w = window.innerWidth;
				h = window.innerHeight;
				target_width = modal_image.clientWidth;
				target_height = modal_image.clientHeight;

				if (target_width >= w && target_height < h) {
					modal_image.style.width = '100%';
					modal_image.style.height = 'auto';
					modal_image.style.maxWidth = target_width;
				} else if (target_width >= w && target_height > h) {
					modal_image.style.width = 'auto';
					modal_image.style.height = '100%';
					modal_image.style.maxWidth = 'initial';
				}

				}, 100);
			});		

			// ------------------------------------
			//
			// 以下、スライダー
			//
			// ------------------------------------

			// アロー右をクリックした時に
			arrow_right.addEventListener('click', (e) => {

				// ------------------------------------
				//
				// modal_imageの画像を変更する処理
				//
				// ------------------------------------

				// 右隣の画像のsrcとカスタムデータ属性（data-text）を取得する
				const target_changedimg = target_img.parentNode.nextElementSibling.querySelector('img');
				const target_changedsrc = target_changedimg.getAttribute('src');
				const target_changedtext = target_changedimg.getAttribute('data-text');

				// モーダルのimgに取得したsrcを追記
				modal_image.setAttribute('src', target_changedsrc);   

				 // モーダルのtextに取得したdata-textの値を代入する
				modal_txt.textContent = target_changedtext;  

				// target_imgとtarget_srcの値を更新→アローを押すたびに次の画像が表示される
				target_img = target_changedimg;  
				target_src = target_changedimg;	

				// ---------------------------------------------
				//
				// ウインドウ幅に応じて画像の表示サイズを変更
				//
				// ---------------------------------------------

				// 各要素を取得
				let tw = target_img.clientWidth;
				let th = target_img.clientHeight;	
				let w = window.innerWidth;
				let h = window.innerHeight;
				let changedTarget_width = modal_image.clientWidth;
				let changedTarget_height = modal_image.clientHeight;

				// ウインドウ幅に応じて画像の表示サイズを変える
				if (changedTarget_width >= w && changedTarget_height < h) {
					modal_image.style.width = '100%';
					modal_image.style.height = 'auto';
					modal_image.style.maxWidth = changedTarget_width;
				} else if (changedTarget_width >= w && changedTarget_height > h) {
					modal_image.style.width = 'auto';
					modal_image.style.height = '100%';
					modal_image.style.maxWidth = 'initial';
				}

				// -------------------------------------------------------
				//
				// ブラウザ幅を変更した時、画像の幅をリアルタイムで変更	
				//
				// -------------------------------------------------------

				let timer = false;			

				// ウインドウ幅を変更した時に
				window.addEventListener('resize',() => {

					if (timer !== false) {
						clearTimeout(timer);
					}

					// 100ミリ秒後に画像サイズを変更
					timer = setTimeout(() => {
					
						tw = target_img.clientWidth;
						th = target_img.clientHeight;	
						w = window.innerWidth;
						h = window.innerHeight;
						changedTarget_width = modal_image.clientWidth;
						changedTarget_height = modal_image.clientHeight;

						if (changedTarget_width >= w && changedTarget_height < h) {
							modal_image.style.width = '100%';
							modal_image.style.height = 'auto';
							modal_image.style.maxWidth = changedTarget_width;
						} else if (changedTarget_width >= w && changedTarget_height > h) {
							modal_image.style.width = 'auto';
							modal_image.style.height = '100%';
							modal_image.style.maxWidth = 'initial';
						}

					}, 100);
				});		
		
			});




			// 同様に、アロー左をクリックした時に
			arrow_left.addEventListener('click', (e) => {

				// modal_imageの画像を変更する処理
				const target_changedimg = target_img.parentNode.previousElementSibling.querySelector('img');
				const target_changedsrc = target_changedimg.getAttribute('src');
				const target_changedtext = target_changedimg.getAttribute('data-text');

				modal_image.setAttribute('src', target_changedsrc);
				modal_txt.textContent = target_changedtext;

				target_img = target_changedimg;
				target_src = target_changedimg;	


				// ウインドウ幅に応じて画像の表示サイズを変更
				let tw = target_img.clientWidth;
				let th = target_img.clientHeight;	
				let w = window.innerWidth;
				let h = window.innerHeight;
				let changedTarget_width = modal_image.clientWidth;
				let changedTarget_height = modal_image.clientHeight;

				if (changedTarget_width >= w && changedTarget_height < h) {
					modal_image.style.width = '100%';
					modal_image.style.height = 'auto';
					modal_image.style.maxWidth = changedTarget_width;
				} else if (changedTarget_width >= w && changedTarget_height > h) {
					modal_image.style.width = 'auto';
					modal_image.style.height = '100%';
					modal_image.style.maxWidth = 'initial';
				}

				// ブラウザ幅を変更した時、画像の幅をリアルタイムで変更	
				window.addEventListener('resize',() => {

					if (timer !== false) {
						clearTimeout(timer);
					}

					timer = setTimeout(() => {
					
						tw = target_img.clientWidth;
						th = target_img.clientHeight;	
						w = window.innerWidth;
						h = window.innerHeight;
						changedTarget_width = modal_image.clientWidth;
						changedTarget_height = modal_image.clientHeight;

						if (changedTarget_width >= w && changedTarget_height < h) {
							modal_image.style.width = '100%';
							modal_image.style.height = 'auto';
							modal_image.style.maxWidth = changedTarget_width;
						} else if (changedTarget_width >= w && changedTarget_height > h) {
							modal_image.style.width = 'auto';
							modal_image.style.height = '100%';
							modal_image.style.maxWidth = 'initial';
						}
						
					}, 100);
				});		
		

			});
		});
	}


	// モーダル閉じるボタン
	modal_close.addEventListener('click', () => {
		modal.classList.remove('active');
		location.reload();
	});

}

