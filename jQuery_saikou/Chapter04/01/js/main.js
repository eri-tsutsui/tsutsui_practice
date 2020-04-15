'use strict'; 
{
    const row_first = document.querySelectorAll('#buttons1 button:nth-child(-n+4)');
    const row_second = document.querySelectorAll('#buttons1 button:nth-child(n+5):nth-child(-n+8)');
    const row_third = document.querySelectorAll('#buttons1 button:nth-child(n+5):nth-child(n+9)');

    // 一行目
    for (let i = 0; i < row_first.length; i ++) {
        row_first[i].addEventListener('mouseover', (e) => {
            const target = e.target;
            target.style.color = '#fff';
            target.style.backgroundColor = '#ae5e9b';
        });
        row_first[i].addEventListener('mouseout', (e) => {
            const target = e.target;
            target.style.color = '#ebc000';
            target.style.backgroundColor = '#ffffff';
        });
    }

    // 二行目
    for (let i = 0; i < row_second.length; i ++) {
        row_second[i].addEventListener('mouseover', (e) => {
            const target = e.target;
            target.style.borderWidth = '12px';
            target.style.color = '#ae5e9b';
        });
        row_second[i].addEventListener('mouseout', (e) => {
            const target = e.target;
            target.style.borderWidth = '0px';
            target.style.color = '#ebc000';
        });
    }
    
    // 三行目
    for (let i = 0; i < row_third.length; i ++) {
        row_third[i].addEventListener('mouseenter', (e) => {
            const target = e.target.querySelector('.bg');
            target.style.width = '100%';
        });
        row_third[i].addEventListener('mouseleave', (e) => {
            const target = e.target.querySelector('.bg');
            target.style.width = '0%';
        });
    }

}







// $(function(){
//     // 
//     var duration = 300;

//     // buttons1 ----------------------------------------
//     // buttons1  1行目
//     $('#buttons1 button:nth-child(-n+4)')
//         .on('mouseover', function() {
//             $(this).stop(true).animate({
//                 backgroundColor: '#ae5e9b',
//                 color: '#fff'
//             }, duration);
//         })
//         .on('mouseout', function(){
//             $(this).stop(true).animate({
//                 backgroundColor: '#fff',
//                 color: '#ebc000'
//             }, duration);
//         });

//     // buttons1  2行目
//     $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
//         .on('mouseover', function(){
//             $(this).stop(true).animate({
//                 borderWidth: '12px',
//                 color: '#ae5e9b'
//             }, duration, 'easeOutSine');
//         })
//         .on('mouseout', function(){
//             $(this).stop(true).animate({
//                 borderWidth: '0px',
//                 color: '#ebc000'
//             }, duration, 'easeOutSine');
//         });

//     // buttons1  3行目
//     $('#buttons1 button:nth-child(n+9)')
//         .on('mouseover', function(){
//             $(this).find('> span')
//                 .stop(true).animate({width: '100%'}, duration, 'easeOutQuad');
//         })
//         .on('mouseout', function(){
//             $(this).find('> span')
//                 .stop(true).animate({width: '0%'}, duration, 'easeOutQuad');
//         });

// });
