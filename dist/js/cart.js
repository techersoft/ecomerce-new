"use strict";

$(document).ready(function () {
  $('.btn-delete-item_cart').click(function () {
    $(this).parents('.product-item_cart').addClass('d-none');
  }); // Show List Card

  $('.shopping-card_icon').click(function () {
    var $this = $(this);

    if (!$this.parent('.shopping-card').find('.shopping-card_list').hasClass('show-card-list')) {
      $this.parent('.shopping-card').find('.shopping-card_list').addClass('show-card-list');
      $this.parent('.shopping-card').css('z-index', '13');
      $(".bg-wrapper-tras").addClass('show-bg-wrapper-tras');
    } else {
      $this.parent('.shopping-card').find('.shopping-card_list').removeClass('show-card-list');
      $(".bg-wrapper-tras").addClass('show-bg-wrapper-tras');
      $(".bg-wrapper-tras").removeClass('show-bg-wrapper-tras');
    }
  });
});