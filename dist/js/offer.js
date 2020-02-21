"use strict";

$(document).ready(function () {
  $('.btn-see-details').click(function () {
    var $this = $(this);

    if ($('.details-supplier').hasClass('show-details')) {
      $('.details-supplier').removeClass('show-details');
      $this.siblings('.details-supplier').addClass('show-details');
    } else {
      $this.siblings('.details-supplier').addClass('show-details');
    }
  });
  $('.btn-close-details-supplier').click(function () {
    $('.details-supplier.show-details').removeClass('show-details');
  });
  $('#show-list-details').click(function () {
    $('.offer-content-list-supplier').addClass('show-list-details');
    $('.bg-wrapper').addClass('show-bg-wrapper');
  });
  $('.btn-close-menu-offer').click(function () {
    $('.offer-content-list-supplier').removeClass('show-list-details');
    $('.bg-wrapper').removeClass('show-bg-wrapper');
  });
  $('.btn-see-details').click(function () {
    $('.bg-wrapper-popup').addClass('show-bg-wrapper');
  });
  $('#btn-popup-dongnhan').click(function () {
    $('#popup-dongnhan').addClass('d-block');
  });
  $('#btn-popup-relax').click(function () {
    $('#popup-relax').addClass('d-block');
  });
  $('#btn-popup-furnist').click(function () {
    $('#popup-furnist').addClass('d-block');
  });
  $('#btn-cancel-popup-dongnhan').click(function () {
    $('#popup-dongnhan').removeClass('d-block');
  });
  $('#btn-cancel-popup-relax').click(function () {
    $('#popup-relax').removeClass('d-block');
  });
  $('#btn-cancel-popup-furnist').click(function () {
    $('#popup-furnist').removeClass('d-block');
  });
});