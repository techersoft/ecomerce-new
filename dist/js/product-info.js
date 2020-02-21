"use strict";

$(document).ready(function () {
  $('.btn-number').click(function (e) {
    e.preventDefault();
    var type = $(this).attr('data-type');
    var input = $("input[name='price']");
    var currentVal = parseInt(input.val());

    if (!isNaN(currentVal)) {
      if (type == 'minus') {
        $(".btn-number[data-type='plus']").removeAttr('disabled');
        $('#maxquantity').removeClass('showExtent');
        var minValue = parseInt(input.attr('min'));
        if (!minValue) minValue = 1;

        if (currentVal > minValue) {
          input.val(currentVal - 1).change();
        }

        if (parseInt(input.val()) == minValue) {
          $(this).attr('disabled', true);
        }
      } else if (type == 'plus') {
        $(".btn-number[data-type='minus']").removeAttr('disabled');
        var maxValue = parseInt(input.attr('max'));
        if (!maxValue) maxValue = 10;

        if (parseInt(input.val()) == maxValue) {
          $('#maxquantity').addClass('showExtent');
          $(this).attr('disabled', true);
          return;
        }

        if (currentVal < maxValue) {
          input.val(currentVal + 1).change();
        }
      }
    }
  }); //set initial state.

  $('.btn-check').change(function () {
    if (this.checked) {
      $('#fastshipping').addClass('showExtent');
    } else {
      $('#fastshipping').removeClass('showExtent');
    }
  });
});
$('.owl-carousel-image').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  items: 1
});