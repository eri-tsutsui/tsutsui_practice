'use strict';
{
    const name_first = document.querySelector('#images p:first-child');
    const name_second = document.querySelector('#images p:nth-child(2)');
    const name_third = document.querySelector('#images p:last-child');

    // 一行目
    name_first.addEventListener('mouseover', () => {
        name_first.children[1].style.opacity = '1.0';
        name_first.children[2].style.opacity = '1.0';
    });
    name_first.addEventListener('mouseout', () => {
        name_first.children[1].style.opacity = '0';
        name_first.children[2].style.opacity = '0';
    });

    // 二行目
    name_second.addEventListener('mouseover', () => {
        name_second.children[1].classList.add('active');
        name_second.children[2].style.opacity = '1.0';
    });
    name_second.addEventListener('mouseout', () => {
        name_second.children[1].classList.remove('active');
        name_second.children[2].style.opacity = '0.1';
    });
    
    // 三行目
    name_third.addEventListener('mouseover', () => {
        name_third.children[0].classList.add('active');
        name_third.children[1].classList.add('active');
        name_third.children[2].style.opacity = '1.0';
    });
    name_third.addEventListener('mouseout', () => {
        name_third.children[0].classList.remove('active');
        name_third.children[1].classList.remove('active');
        name_third.children[2].style.opacity = '0.1';
    });

}


// $(function(){
//     // 
//     var duration = 300;

//     // images ----------------------------------------
//     var $images = $('#images p');

//     // images 1つ目の画像
//     $images.filter(':nth-child(1)')
//         .on('mouseover', function(){
//             $(this).find('strong, span').stop(true).animate({opacity: 1}, duration);
//         })
//         .on('mouseout', function(){
//             $(this).find('strong, span').stop(true).animate({opacity: 0}, duration);
//         });

//     // images 2つ目の画像
//     $images.filter(':nth-child(2)')
//         .on('mouseover', function(){
//             $(this).find('strong').stop(true).animate({opacity: 1, left: '0%'}, duration);
//             $(this).find('span').stop(true).animate({opacity: 1}, duration);
//         })
//         .on('mouseout', function(){
//             $(this).find('strong').stop(true).animate({opacity: 0, left: '-200%'}, duration);
//             $(this).find('span').stop(true).animate({opacity: 0}, duration);
//         });

//     // images 3つ目の画像
//     $images.filter(':nth-child(3)')
//         .on('mouseover', function(){
//             $(this).find('strong').stop(true).animate({bottom: '0px'}, duration);
//             $(this).find('span').stop(true).animate({opacity: 1}, duration);
//             $(this).find('img').stop(true).animate({top: '-20px'}, duration * 1.3);
//         })
//         .on('mouseout', function(){
//             $(this).find('strong').stop(true).animate({bottom: '-80px'}, duration);
//             $(this).find('span').stop(true).animate({opacity: 0}, duration);
//             $(this).find('img').stop(true).animate({top: '0px'}, duration);
//         });

// });
