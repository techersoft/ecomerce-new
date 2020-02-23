"use strict";

$(document).ready(function () {
  $('.control-side-menu').click(function () {
    $('.sub-menu-content').slideToggle();
    $('.sub-menu-sidebar').removeClass('left-100');
  }); // Menu Mobile Đa cấp

  $(".box-item-nav_mobile").click(function (e) {
    e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
    // Ẩn het toan bo nhung thang khac

    var navsub = $(this).find(".header-nav-menu");

    if ($(this).hasClass('selected') == false) {
      $(".box-item-nav_mobile.selected").removeClass('selected').find('.header-nav-menu').slideUp('swing');
      $(this).addClass('selected');
      navsub.fadeIn('slow');
    } else {
      $(".box-item-nav_mobile.selected").removeClass('selected').find('.header-nav-menu').slideUp('swing');
    }
  }); // Cấp 2

  $(".nav-menu_content-box_mobile").click(function (e) {
    e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
    // Ẩn het toan bo nhung thang khac

    var navsub = $(this).find(".header-nav-menu_content-sub_mobile");

    if ($(this).hasClass('selected') == false) {
      $(".nav-menu_content-box_mobile.selected").removeClass('selected').find('.header-nav-menu_content-sub_mobile').slideUp('swing');
      $(this).addClass('selected');
      navsub.fadeIn('slow');
    } else {
      $(".nav-menu_content-box_mobile.selected").removeClass('selected').find('.header-nav-menu_content-sub_mobile').slideUp('swing');
    }
  }); // Show Icon Menu Mobile

  $(".nav-menu_content-box_mobile").click(function () {
    var navIconMobile = $(this).find(".icon-menu_mobile");
    var navIconsMobile = $(".nav-menu_content-box_mobile").find(".icon-menu_mobile");

    if ($(this).hasClass('selected') == false) {
      navIconMobile.removeClass('show-icon');
    } else {
      navIconsMobile.removeClass('show-icon');
      navIconMobile.addClass('show-icon');
    }
  }); // Open Menu Mobile

  $('.btn-menu_mobile').click(function () {
    $(".menu-mobile").addClass('show-menu_mobile');
    $(".bg-wrapper").addClass('show-bg-wrapper');
    $("body").css('overflow', 'hidden');
    $("#logo-header").css('opacity', '0');
  }); // Close Menu Mobile

  $('.btn-close-menu_mobile').click(function () {
    $(".menu-mobile").removeClass('show-menu_mobile');
    $(".bg-wrapper").removeClass('show-bg-wrapper');
    $("body").css('overflow', 'auto');
    $("#logo-header").css('opacity', '1');
  }); // Close all function when Target BODY

  $(window).click(function (e) {
    if (event.target.className == "bg-wrapper show-bg-wrapper") {
      $(".bg-wrapper").removeClass("show-bg-wrapper");
      $(".menu-mobile").removeClass('show-menu_mobile');
      $('.wrapper-sub-menu').removeClass('show-sub-menu');
      $("body").css('overflow', 'auto');
      $("#logo-header").css('opacity', '1');
      $('.op-menu').removeClass('clo-menu');
      $('.offer-content-list-supplier').removeClass('show-list-details');
      $('.content-shop_main_left').removeClass('show-menu_shop');
    }
  });
  $(window).click(function (e) {
    if (event.target.className == "bg-wrapper-tras show-bg-wrapper-tras") {
      $('.shopping-card_list.show-card-list').removeClass('show-card-list');
      $(".bg-wrapper-tras").removeClass("show-bg-wrapper-tras");
    }
  }); // Hidden and Show Menu when to scroll up

  var fixMenu = $('#header').offset().top;
  var windowHeight = window.pageYOffset;
  $(window).scroll(function () {
    var currentScrollWindow = window.pageYOffset;

    if (windowHeight > currentScrollWindow && fixMenu < $(window).scrollTop()) {
      $('#header').addClass('fixed-header');
    } else {
      $('#header').removeClass('fixed-header');
    }

    windowHeight = currentScrollWindow;
  });
});