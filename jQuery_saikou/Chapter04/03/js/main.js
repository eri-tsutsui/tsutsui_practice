'use stirict';

{
    const btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i ++) {
        const pos = i * 40 - 40;
        btns[i].style.top =  pos + 'px';

        btns[i].addEventListener('mouseenter', (e) => {
            const target = e.target;
            target.style.backgroundColor = '#faee00';
            target.style.color = '#000';

            const img1 = target.querySelector('img:first-child');
            const img2 = target.querySelector('img:nth-child(2)');
            img1.style.opacity = '0';
            img2.style.opacity = '1';
        })

        btns[i].addEventListener('mouseleave', (e) => {
            const target = e.target;
            target.style.backgroundColor = '#fff';
            target.style.color = '#01b169';

            const img1 = target.querySelector('img:first-child');
            const img2 = target.querySelector('img:nth-child(2)');
            img1.style.opacity = '1';
            img2.style.opacity = '0';
        })
    }
}


// $(function(){
//     // 
//     var duration = 300;

//     // buttons2 ----------------------------------------
//     $('#buttons2 button').each(function(index){
//         //var pos = Math.random() * 80 - 40;
//         var pos = index * 40 - 40;
//         $(this).css('top', pos);
//     })
//     .on('mouseover', function(){
//         var $btn = $(this).stop(true).animate({
//             backgroundColor: '#faee00',
//             color: '#000'
//         }, duration);
//         $btn.find('img:first-child').stop(true).animate({opacity: 0}, duration);
//         $btn.find('img:nth-child(2)').stop(true).animate({opacity: 1}, duration);
//     })
//     .on('mouseout', function(){
//         var $btn = $(this).stop(true).animate({
//             backgroundColor: '#fff',
//             color: '#01b169',
//         }, duration);
//         $btn.find('img:first-child').stop(true).animate({opacity: 1}, duration);
//         $btn.find('img:nth-child(2)').stop(true).animate({opacity: 0}, duration);
//     });


// });
