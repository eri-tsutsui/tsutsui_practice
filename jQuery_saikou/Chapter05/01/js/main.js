'use strict';
{
    const slides = document.querySelectorAll('.slideshow img');
    const count = slides.length; // スライドの枚数
    let currentIndex = 0;

    slides[0].style.opacity = '1';

    // 7500 ミリ秒ごとに showNextSlide 関数を実行
    setInterval(showNextSlide, 7500);

    // 次のスライドを表示する関数
    function showNextSlide() {
        let nextIndex = (currentIndex + 1) % count; // 1.2.3.0
        slides[currentIndex].style.opacity = '0';
        slides[nextIndex].style.opacity = '1';
        currentIndex = nextIndex;
    }

}


// $(function () {

//     /*
//      * Slideshow
//      */
//     // slideshow クラスを持った要素ごとに処理を実行
//     $('.slideshow').each(function () {

//         var $slides = $(this).find('img'), // すべてのスライド
//             slideCount = $slides.length,   // スライドの点数
//             currentIndex = 0;              // 現在のスライドを示すインデックス

//         // 1 番目のスライドをフェードインで表示
//         $slides.eq(currentIndex).fadeIn();

//         // 7500 ミリ秒ごとに showNextSlide 関数を実行
//         setInterval(showNextSlide, 7500);

//         // 次のスライドを表示する関数
//         function showNextSlide () {

//             // 次に表示するスライドのインデックス
//             // (もし最後のスライドなら最初に戻る)
//             var nextIndex = (currentIndex + 1) % slideCount;

//             // 現在のスライドをフェードアウト
//             $slides.eq(currentIndex).fadeOut();

//             // 次のスライドをフェードイン
//             $slides.eq(nextIndex).fadeIn();

//             // 現在のスライドのインデックスを更新
//             currentIndex = nextIndex;
//         }

//     });

// });
