'use strict';

{
    const aside = document.querySelector('aside');
    const asidebtn = aside.querySelector('button');
    const img = asidebtn.querySelector('img');
    
    asidebtn.addEventListener('click', () => {
        aside.classList.toggle('open');
        if (aside.classList.contains('open')) {
            aside.style.left = '-70px';
            img.setAttribute('src', 'img/btn_close.png');
        } else {
            aside.style.left = '-350px';
            img.setAttribute('src', 'img/btn_open.png');
        }
    });
}

// $(function(){
//     // 
//     var duration = 300;

//     // aside ----------------------------------------
//     var $aside = $('.page-main > aside');
//     var $asidButton = $aside.find('button')
//         .on('click', function(){
//             $aside.toggleClass('open');
//             if($aside.hasClass('open')){
//                 $aside.stop(true).animate({left: '-70px'}, duration, 'easeOutBack');
//                 $asidButton.find('img').attr('src', 'img/btn_close.png');
//             }else{
//                 $aside.stop(true).animate({left: '-350px'}, duration, 'easeInBack');
//                 $asidButton.find('img').attr('src', 'img/btn_open.png');
//             };
//         });

// });
