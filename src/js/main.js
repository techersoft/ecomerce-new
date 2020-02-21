$(document).ready(function () {
    var productItem = $('.product-item-slider');
    var productList = $('.product-list-slider');
    $('.product-item').get().forEach(function (item) {
        let thumbnailItem = $(item).find(".thumbnail-item");
        let productItemImage = $(item).find('.product-item-image img')
        thumbnailItem.on('click', function (e) {
            e.stopPropagation();
            thumbnailItem.removeClass('active');
            $(this).addClass('active');
            let imgSrc = $(this).children('img').attr('src');
            if ($(this).children('img').attr('src') === productItemImage.attr("src")) {
                return;
            } else {
                productItemImage.attr("src", imgSrc);
            }

        })
    })


    $('.owl-carousel-2').owlCarousel({
        margin: 10,
        nav: false,
        dots: false,
        items: 4,
        touchDrag: false,
        mouseDrag: false
    })

    $('.status').on('click', function (e) {
        $(this).toggleClass('like unlike');
    })

    // Choose Props Colors

    $('.prop-colors span').on('click', function (e) {
        e.stopPropagation();
        $('.prop-colors span.active').removeClass('active');
        $(this).addClass('active');
    })
    // Control view less, more content
    $('.control-content').on('click', function (e) {
        $('#viewToggle').toggleClass('read-less read-more');
        if ($('#viewToggle').hasClass('read-more')) {
            $(this).html('Thu gọn')
        } else {
            $(this).html('Xem thêm')
        }
    })
    // Prevent typing in number amount input
    $('.amount-box input').on('keypress keydown', function (e) {
        e.preventDefault();
    })
    // Handle Count Amount Props
    $('.handle-amount').on('click', function (e) {
        var $this = $(this);
        var oldVal = $this.siblings('.amount-number').val();
        var newVal;

        newVal = $this.data('multi') == '1' ? parseInt(oldVal) + 1 : (+oldVal >= 2) ? parseInt(oldVal) - 1 : oldVal;
        $this.siblings('.amount-number').val(newVal);
    })

    // Carousel Product Detail
    var productDetail = $('#productViewCarousel');
    productDetail.slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        vertical: true,
        draggable: false,
        focusOnSelect: false,
        prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>'

    })

    // Get the url of the first images
    function getFirstImage() {
        var firstUrl = $('.thumbs-item img').first().attr('src');
        var imgZoom = $('.thumbs-item img').first().attr('data-zoom')
        $('#media-image').attr('src', firstUrl);
        $('#media-image').attr('data-zoom-image', imgZoom);
        $('.thumbs-item img').first().addClass('active');

    }
    getFirstImage();

    // Add border when click the thumb images
    $('.thumbs-img').on('click', function (e) {
        var $this = $(this);
        var imgUrl = $this.attr('src');
        var imgZoom = $this.attr('data-zoom')
        $('.thumbs-img.active').removeClass('active');
        $this.addClass('active');
        $('#media-image').attr('src', imgUrl);
        if (imgZoom) $('#media-image').attr('data-zoom-image', imgZoom);


    })
    // Change slick slider to horizontal in smaller screen

    // Zoom image when hover
    $("#media-image").ezPlus(
        {
            cursor: 'crosshair',
            zoomWindowFadeIn: 1000,
            zoomWindowFadeOut: 100,
            lensFadeIn: 1000,
            lensFadeOut: 100,
            zoomWindowWidth: 400,
            zoomWindowHeight: 400
        }
    );

    // Display Image Upload
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#output').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#upload").change(function () {
        readURL(this);
    });
});