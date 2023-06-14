// let button = $('.tab-button')
// let content = $('.tab-content')
//
// for (let i = 0; i < 3; i++){
//     button.eq(i).on('click',function(){
//         탭열기(i)
//     })
// }

$('.list').click(function(){
    if( e.target == document.querySelectorAll('.tab-button')[0] ){
        console.log('gg')
    }
})


function 탭열기(숫자){
    button.removeClass('orange');
    button.eq(숫자).addClass('orange');
    content.removeClass('show');
    content.eq(숫자).addClass('show');
}

// button.eq(1).on('click',function(){
//     button.removeClass('orange');
//     button.eq(1).addClass('orange');
//     content.removeClass('show');
//     content.eq(1).addClass('show');
// })
// button.eq(2).on('click',function(){
//     button.removeClass('orange');
//     button.eq(2).addClass('orange');
//     content.removeClass('show');
//     content.eq(2).addClass('show');
// })