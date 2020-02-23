// Double slider

function getVals(){
    // Get slider values
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat( slides[0].value );
    var slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    var displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = '$' + slide1 + " - " + '$' +slide2;
}

window.onload = function(){
    // Initialize Sliders
    var sliderSections = document.getElementsByClassName("range-slider");
        for( var x = 0; x < sliderSections.length; x++ ){
        var sliders = sliderSections[x].getElementsByTagName("input");
        for( var y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
            sliders[y].oninput = getVals;
            // Manually trigger event first time to display values
            sliders[y].oninput();
            }
        }
        }
}

// Menu Shop
$(".nav-category_info").click(function(e) {
    e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
    // Ẩn het toan bo nhung thang khac
    var navsub = $(this).find(".sub_nav-category");
    if($(this).hasClass('selected') == false) {
        $(".nav-category_info.selected").removeClass('selected').find('.sub_nav-category').slideUp('swing');
        $(this).addClass('selected');
        navsub.fadeIn('slow');
    } else {
        $(".nav-category_info.selected").removeClass('selected').find('.sub_nav-category').slideUp('swing');
    } 
})

$('.btn-sidemenu').click(function(){
    $('.content-shop_main_left').addClass('show-menu_shop');
    $(".bg-wrapper").addClass('show-bg-wrapper');
    $("body").css('overflow','hidden');
});
$('.btn-close-menu_shop').click(function(){
    $('.content-shop_main_left').removeClass('show-menu_shop');
    $(".bg-wrapper").removeClass('show-bg-wrapper');
    $("body").css('overflow','auto');
})
