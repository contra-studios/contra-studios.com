$(function() {
  $(document).ready(function () {
   $('.topSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider',
    mobileFirst: true,
    speed: 1000
   });
  });

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
      focusOnSelect: true,
      draggable: false,
      mobileFirst: true,
      speed: 1000
    });
});

  $('.topSlider').show();
  $('.buttonSlider').show();
  $('.bottomSlider').show();
});


$('.topSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  // setTimeout(function(){
  //       document.getElementById("topSlider").style.visibility = "hidden";},300);
  // setTimeout(function(){
  //       document.getElementById("topSlider").style.visibility = "visible";},800);
});
