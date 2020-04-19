'use strict';
{

    // 変数を定義
    const header = document.querySelector('.page-header');
    const headerChild = header.children[0]; //子要素を全て取得
    const headerClone = headerChild.cloneNode(true); //その子要素を複製
    const headerCloneContainer = document.createElement('div'); //空のdivタグを作成
    const rect = header.getBoundingClientRect();
    const threhold = rect.top + rect.height;
    const body = document.querySelector('body');

    headerCloneContainer.classList.add('page-header-clone'); //クラス名を追記
    headerCloneContainer.appendChild(headerClone); //headerCloneContainerのクローンを追加
    body.appendChild(headerCloneContainer);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY >threhold ) {
            headerCloneContainer.classList.add('visible');
        } else {
            headerCloneContainer.classList.remove('visible');
        }
    });

    window.dispatchEvent(new Event('scroll'));

}

// $(function () {

//     /*
//      * Sticky header
//      */
//     $('.page-header').each(function () {

//         var $window = $(window), // Window オブジェクト
//             $header = $(this),   // ヘッダー

//             // ヘッダーのクローン
//             $headerClone = $header.contents().clone(),

//             // ヘッダーのクローンのコンテナー
//             $headerCloneContainer = $('<div class="page-header-clone"></div>'),

//             // HTML の上辺からヘッダーの底辺までの距離 = ヘッダーのトップ位置 + ヘッダーの高さ
//             threshold = $header.offset().top + $header.outerHeight();

//         // コンテナーにヘッダーのクローンを挿入
//         $headerCloneContainer.append($headerClone);

//         // コンテナーを body の最後に挿入
//         $headerCloneContainer.appendTo('body');

//         // スクロール時に処理を実行するが、回数を 1 秒間あたり 15 までに制限
//         $window.on('scroll', $.throttle(1000 / 15, function () {
//             if ($window.scrollTop() > threshold) {
//                 $headerCloneContainer.addClass('visible');
//             } else {
//                 $headerCloneContainer.removeClass('visible');
//             }
//         }));

//         // スクロールイベントを発生させ、初期位置を決定
//         $window.trigger('scroll');
//     });

// });
