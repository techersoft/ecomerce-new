"use strict";

$(document).ready(function () {
  $('.owl-carousel-concept').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 3,
    autoplay: false,
    autoplayTimeout: 9000,
    smartSpeed: 750,
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      }
    }
  });
  $('.owl-carousel-trademark').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    items: 4,
    autoplay: true,
    autoplayTimeout: 9000,
    smartSpeed: 750,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      700: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
  $('.owl-carousel-hotkey').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 7,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 750,
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2
      },
      500: {
        items: 3
      },
      700: {
        items: 4
      },
      8500: {
        items: 5
      },
      1000: {
        items: 6
      },
      1111: {
        items: 7
      }
    }
  });
  $('.owl-carousel-banner').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 750
  });
});