$(function() {

  var slides = $('.topAnimation');
  

  $(document).ready(function () {
   $('.topSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider',
    mobileFirst: true,
    cssEase: 'ease',
    speed: 1000,
    draggable: false,
    lazyLoad: 'progressive'
   });
  });
  
  // $('.topSlider').slick().on('afterChange', function(event, slick, currentSlide) {
  //   slides.removeClass('topAnimationIn topAnimationOut')
  // });

  $(document).ready(function () {
   $('.buttonSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider',
    mobileFirst: true,
    speed: 1000
   });
  });

  $(document).ready(function () {
    $('.bottomSlider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider',
      dots: false,
      centerMode: false,
      focusOnSelect: false,
      draggable: false,
      mobileFirst: true,
      speed: 1000,
      lazyLoad: 'progressive'
    });
});

  $('.topSlider').show();
  $('.buttonSlider').show();
  $('.bottomSlider').show();
});


