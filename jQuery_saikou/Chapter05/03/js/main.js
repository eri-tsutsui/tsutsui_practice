'use strict';
// {
//     const header = document.querySelector('.page-header');
//     const rect = header.getBoundingClientRect();
//     const headerOffsetTop = rect.top;
    
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > headerOffsetTop) {
//             header.classList.add('sticky');
//         } else {
//             header.classList.remove('sticky');
//         }
//     });

//     window.dispatchEvent(new Event('scroll'));
// }


// {
//     const header = document.querySelector('.page-header'); 
//     const rect = header.getBoundingClientRect();
//     const headerOffsetTop = rect.top; //このメソッドで取得できるのは「ビューポート(画面内)」における位置なので、スクロール量によって値が変わります。

//     function onScrollHandler () {
//         if (window.scrollY > headerOffsetTop) {
//             header.classList.add('sticky');
//         } else {
//             header.classList.remove('sticky');
//         }
//     };
    
//     window.addEventListener('scroll', onScrollHandler);
//     onScrollHandler();

// }

// {
//     const header = document.querySelector('.page-header');
//     const rect = header.getBoundingClientRect();
//     const win = header.ownerDocument.defaultView;
//     const headerOffsetTop = rect.top + win.pageYOffset;
//     console.log(headerOffsetTop);
//     function onScrollHandler () {
//         if (window.scrollY > headerOffsetTop) {
//             header.classList.add('sticky');
//         } else {
//             header.classList.remove('sticky');
//         }
//     };
//     window.addEventListener('scroll', onScrollHandler);
//     onScrollHandler();

// }

{
    const header = document.querySelector('.page-header');
    const rect = header.getBoundingClientRect();
    const headerOffsetTop = rect.top + window.pageYOffset;

    // rect.topはビューポートにおけるトップからの位置
    // window.pageYoffsetは現在のスクロール量

    console.log(rect.top);
    console.log(window.pageYOffset);

    function onScrollHandler () {
        if (window.scrollY > headerOffsetTop) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };
    window.addEventListener('scroll', onScrollHandler);
    onScrollHandler();

}

    // const header = document.querySelector('.page-header');
    // const rect = header.getBoundingClientRect();
    // const win = header.ownerDocument.defaultView;
    // const headerOffsetTop = rect.top + win.pageYOffset;
    // console.log(headerOffsetTop);
    // function onScrollHandler () {
    //     if (window.scrollY > headerOffsetTop) {
    //         header.classList.add('sticky');
    //     } else {
    //         header.classList.remove('sticky');
    //     }
    // };
    // window.addEventListener('scroll', onScrollHandler);
    // onScrollHandler();


// $(function () {

//     /*
//      * Sticky header
//      */
//     $('.page-header').each(function () {

//         var $window = $(window), // ウィンドウを jQuery オブジェクト化
//             $header = $(this),   // ヘッダーを jQuery オブジェクト化
//             // ヘッダーのデフォルト位置を取得
//             headerOffsetTop = $header.offset().top;

//         // ウィンドウのスクロールイベントを監視
//         // (ウィンドウがスクロールするごとに処理を実行する)
//         $window.on('scroll', function () {
//             // ウィンドウのスクロール量をチェックし、
//             // ヘッダーのデフォルト位置を過ぎていればクラスを付与、
//             // そうでなければ削除
//             if ($window.scrollTop() > headerOffsetTop) {
//                 $header.addClass('sticky');
//             } else {
//                 $header.removeClass('sticky');
//             }
//         });

//         // ウィンドウのスクロールイベントを発生させる
//         // (ヘッダーの初期位置を調整するため)
//         $window.trigger('scroll');

//     });
// });
