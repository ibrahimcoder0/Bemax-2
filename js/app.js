$(document).ready(function(){

  // slider
    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1
      });


      // counter
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



    // testimonail
    $('.testimonial-active').slick({
      infinite: true,
      slidesToShow: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1
    });












})