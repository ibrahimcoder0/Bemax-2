$(document).ready(function () {
  // slider
  $('.slider-active').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  });

  // counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000,
  });

  // testimonail
  $('.testimonial-active').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  });
});

/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js


****************************************************/

(function ($) {
  ('use strict');

  ////////////////////////////////////////////////////
  // 02. Mobile Menu Js
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: '992',
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });

  ////////////////////////////////////////////////////
  // 03. Sidebar Js
  $('.ic-menu-toggle').on('click', function () {
    $('.ic-sidebar-menu').addClass('opened');
    $('.body-overlay').addClass('opened');
  });
  $('.sidebar-close').on('click', function () {
    $('.ic-sidebar-menu').removeClass('opened');
    $('.body-overlay').removeClass('opened');
  });

  ////////////////////////////////////////////////////
  // 04. Body overlay Js
  $('.body-overlay').on('click', function () {
    $('.ic-sidebar-menu').removeClass('opened');
    $('.body-overlay').removeClass('opened');
  });
})(jQuery);
