$(function() {
$(document).ready(function () {
 $('.topSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.bottomSlider',
  mobileFirst: true,
  speed: 1000
 });
});

  $(document).ready(function () {
    $('.bottomSlider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.topSlider',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      draggable: false,
      mobileFirst: true,
      speed: 1000
    });
});

  $('.topSlider').show();
  $('.bottomSlider').show();
});


$('.topSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  // setTimeout(function(){
  //       document.getElementById("topSlider").style.visibility = "hidden";},300);
  // setTimeout(function(){
  //       document.getElementById("topSlider").style.visibility = "visible";},800);
});
