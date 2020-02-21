var btnShowControl = $('#btn-show-controls');
var conceptControl = $('#nav-controls-concept');
var btnControlTag = $('#btn-control-tags');
var itemTag = $('.tag-item');
var itemTag1 = $('.item-1');
var itemTag2 = $('.item-2');
var moreProduct = $('.more-product');
var moreProduct1 = $('#more-1');
var moreProduct2 = $('#more-2');
var carouselProduct = $('.carousel-product');
var hideProduct = $('.hide-product');
var menuConcept = $('.left-menu li');

$(document).ready(function(){
    btnShowControl.click(function(e){
        conceptControl.toggleClass('d-block')
    })

    btnControlTag.click(function(){
        itemTag.toggleClass('d-none');
        if($(this).children().prev().hasClass('color-green')){
            $(this).children().prev().addClass('color-default');
            $(this).children().prev().removeClass('color-green');
            $(this).find('span').html('Show tags')
        }
        else if($(this).children().prev().hasClass('color-default')){
            $(this).find('span').html('Hide tags')
            $(this).children().prev().removeClass('color-default');
            $(this).children().prev().addClass('color-green')
        }
    })
    itemTag1.click(function(){
        moreProduct2.toggleClass('show-more-product');
        moreProduct1.removeClass('show-more-product');
        carouselProduct.addClass('height-down');
        if(!moreProduct2.hasClass('show-more-product')){
            carouselProduct.removeClass('height-down');
        }
    })
    itemTag2.click(function(){
        
        carouselProduct.addClass('height-down')
        moreProduct1.toggleClass('show-more-product');
        moreProduct2.removeClass('show-more-product');
        if(!moreProduct1.hasClass('show-more-product')){
            carouselProduct.removeClass('height-down');
        }
    })

    hideProduct.click(function(){
        moreProduct.removeClass('show-more-product');
        carouselProduct.removeClass('height-down');
    })
    // window.click(function(){

    // })
    menuConcept.click(function(){
        $(this).children().addClass('active-concept')
        $(this).siblings().children().removeClass('active-concept')
    })
    
})