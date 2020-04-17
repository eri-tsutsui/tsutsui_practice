'use strict';
{

    // 変数の定義
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        const container = document.querySelector('.slideshow');
        const slideGroup = container.querySelector('.slideshow-slides');
        const slides = slideGroup.querySelectorAll('.slide');
        const nav = container.querySelector('.slideshow-nav');
        const navAnchors = nav.querySelectorAll('a');
        const indicator = container.querySelector('.slideshow-indicator');
        const slideCount = slides.length;
        let indicatorHTML = ''; // メモ：空の要素にコンテンツを生成するための変数
        let currentIndex = 0;
        let duration = 500;
        let interval = 7500;
        let timer;

    // HTML 要素の配置、生成、挿入
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // スライドを横並べにして
        // インジケーターのアンカーを作成
        for (let i = 0; i < slideCount; i ++) {
            slides[i].style.left = 100 * i + '%';
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        }

        // インジケーターにコンテンツを挿入
        indicator.insertAdjacentHTML('afterbegin', indicatorHTML);
        let indicatorAnchors = indicator.querySelectorAll('a');


    // 関数の定義
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // インデックス番号を元に任意のスライドを表示する処理
        function goToSlide (index) {
            slideGroup.style.left = -100 * index + '%';
            currentIndex = index;
            updateNav();
        }

        // ナビとインジケーターの状態を更新する関数
        function updateNav () {
            const navPrev = nav.querySelector('.prev');
            const navNext = nav.querySelector('.next');

            // ナビの更新
            // 最初のスライドが表示されている時、prevを無効に 
            if (currentIndex === 0) {
                navPrev.classList.add('disabled');
            } else {
                navPrev.classList.remove('disabled');
            }

            // 最後のスライドが表示されている時、nextを無効に 
            if (currentIndex === slideCount - 1) {
                navNext.classList.add('disabled');
            } else {
                navNext.classList.remove('disabled');
            }

            // インジケーターの更新
            // 全てスライドのアンカーからactiveクラスを削除する 
            indicatorAnchors.forEach(indicatorAnchor => {
                indicatorAnchor.classList.remove('active');
            });

            // 現在のスライドに該当するアンカーにactiveクラスをつける 
            indicatorAnchors[currentIndex].classList.add('active');
        }

        function startTimer () {
            timer = setInterval ( () => {
                let nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);
            }, interval);
        }

        function stopTimer () {
            clearInterval(timer);
        }
    

        // インベントの登録
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // ナビがクリックされた時
        for (let i = 0; i < navAnchors.length; i ++) {
            navAnchors[i].addEventListener('click', (e) => {
                const target = e.target;
                event.preventDefault();
                if (target.classList.contains('prev')) {
                    goToSlide(currentIndex - 1);
                } else {
                    goToSlide(currentIndex + 1);
                }
            });
        } 

        // インジケーターがクリックされた時
        for (let i = 0; i < indicatorAnchors.length; i ++) {
            indicatorAnchors[i].addEventListener('click', (e) => {
                event.preventDefault();
                const target = e.target;
                const index = Array.prototype.indexOf.call(indicatorAnchors, target); //インデックス番号の取得
                if (!target.classList.contains('active')) {
                    goToSlide(index);
                } 
            });
        } 

        container.addEventListener('mouseenter', () => {
            stopTimer();
        });
        container.addEventListener('mouseleave', () => {
            startTimer();
        });

        goToSlide(currentIndex);

        startTimer();

}



// 以下、jQuery解答

// $(function () {

//     /*
//      * Slideshow
//      */
//     $('.slideshow').each(function () {

//     // 変数の準備
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//         var $container = $(this),                                 // a
//             $slideGroup = $container.find('.slideshow-slides'),   // b
//             $slides = $slideGroup.find('.slide'),                 // c
//             $nav = $container.find('.slideshow-nav'),             // d
//             $indicator = $container.find('.slideshow-indicator'), // e
//             // スライドショー内の各要素の jQuery オブジェクト
//             // a スライドショー全体のコンテナー
//             // b 全スライドのまとまり (スライドグループ)
//             // c 各スライド
//             // d ナビゲーション (Prev/Next)
//             // e インジケーター (ドット)

//             slideCount = $slides.length, // スライドの点数
//             indicatorHTML = '',          // インジケーターのコンテンツ
//             currentIndex = 0,            // 現在のスライドのインデックス
//             duration = 500,              // 次のスライドへのアニメーションの所要時間
//             easing = 'easeInOutExpo',    // 次のスライドへのアニメーションのイージングの種類
//             interval = 7500,             // 自動で次のスライドに移るまでの時間
//             timer;                       // タイマーの入れ物


//     // HTML 要素の配置、生成、挿入
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//         // 各スライドの位置を決定し、
//         // 対応するインジケーターのアンカーを生成
//         $slides.each(function (i) {
//             $(this).css({ left: 100 * i + '%' });
//             indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
//         });

//         // インジケーターにコンテンツを挿入
//         $indicator.html(indicatorHTML);


//     // 関数の定義
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//         // 任意のスライドを表示する関数
//         function goToSlide (index) {
//             // スライドグループをターゲットの位置に合わせて移動
//             $slideGroup.animate({ left: - 100 * index + '%' }, duration, easing);
//             // 現在のスライドのインデックスを上書き
//             currentIndex = index;
//             // ナビゲーションとインジケーターの状態を更新
//             updateNav();
//         }

//         // スライドの状態に応じてナビゲーションとインジケーターを更新する関数
//         function updateNav () {
//             var $navPrev = $nav.find('.prev'), // Prev (戻る) リンク
//                 $navNext = $nav.find('.next'); // Next (進む) リンク
//             // もし最初のスライドなら Prev ナビゲーションを無効に
//             if (currentIndex === 0) {
//                 $navPrev.addClass('disabled');
//             } else {
//                 $navPrev.removeClass('disabled');
//             }
//             // もし最後のスライドなら Next ナビゲーションを無効に
//             if (currentIndex === slideCount - 1) {
//                 $navNext.addClass('disabled');
//             } else {
//                 $navNext.removeClass('disabled');
//             }
//             // 現在のスライドのインジケーターを無効に
//             $indicator.find('a').removeClass('active')
//                 .eq(currentIndex).addClass('active');
//         }

//         // タイマーを開始する関数
//         function startTimer () {
//             // 変数 interval で設定した時間が経過するごとに処理を実行
//             timer = setInterval(function () {
//                 // 現在のスライドのインデックスに応じて次に表示するスライドの決定
//                 // もし最後のスライドなら最初のスライドへ
//                 var nextIndex = (currentIndex + 1) % slideCount;
//                 goToSlide(nextIndex);
//             }, interval);
//         }

//         // タイマーを停止る関数
//         function stopTimer () {
//             clearInterval(timer);
//         }


//     // インベントの登録
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//         // ナビゲーションのリンクがクリックされたら該当するスライドを表示
//         $nav.on('click', 'a', function (event) {
//             event.preventDefault();
//             if ($(this).hasClass('prev')) {
//                 goToSlide(currentIndex - 1);
//             } else {
//                 goToSlide(currentIndex + 1);
//             }
//         });

//         // インジケーターのリンクがクリックされたら該当するスライドを表示
//         $indicator.on('click', 'a', function (event) {
//             event.preventDefault();
//             if (!$(this).hasClass('active')) {
//                 goToSlide($(this).index());
//             }
//         });

//         // マウスが乗ったらタイマーを停止、はずれたら開始
//         $container.on({
//             mouseenter: stopTimer,
//             mouseleave: startTimer
//         });


//     // スライドショーの開始
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//         // 最初のスライドを表示
//         goToSlide(currentIndex);

//         // タイマーをスタート
//         startTimer();

//     });

// });
