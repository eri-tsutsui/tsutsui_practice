'use strict';
{
	const tabButtons = document.querySelectorAll('.menu-item a');
	const works = document.querySelectorAll('.work');

	//-------------------------------------------------------------
	// デフォルト設定
	//-------------------------------------------------------------
	// 1枚目の写真とタブがactive状態にする
	works[0].classList.add('active');
	tabButtons[0].classList.add('active');

	//-------------------------------------------------------------
	// クリックした時の動作
	//-------------------------------------------------------------

	tabButtons.forEach(clickedItem => {
		// クリックした要素を取得
		clickedItem.addEventListener('click', e => {
			e.preventDefault();
			
			// 全てのタブメニューからactiveクラスをとる
			tabButtons.forEach(tabButton => {
				tabButton.classList.remove('active');
			});

			// クリックしたタブにactiveクラスを付与
			clickedItem.classList.add('active');

			// 全てのパネルからactiveクラスをとる
			works.forEach(work => {
				work.classList.remove('active');
			});

			// クリックしたアイテムのhrefを取得し、それを元に紐づくパネルを取得
			const idLink = clickedItem.getAttribute('href');
			const showWork = document.querySelector(idLink);

			// 紐づくパネルにactiveクラスを付与
			showWork.classList.add('active');

		})
	});

}