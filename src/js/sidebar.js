$(document).ready(function(){
    $('.menu-icon-btn').click(function(e){
        e.stopPropagation();
        var subMenu = $(this).siblings();
        subMenu.toggleClass('left-100')
        $(this).parent().siblings().children().next().removeClass('left-100')
    })


    // $('.filter-header').click(function(){
    //     $(this).next().toggleClass('d-none')
    //     // $(this).find('.menu-icon').toggleClass('rotate')
    // })
})