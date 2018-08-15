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
    speed: 0
   }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    // if(currentSlide != nextSlide){
    //     if(currentSlide - nextSlide<=-1) {
    //       slides.removeClass('keepSlideInvisible slideInRight slideOutRight slideInLeft slideOutLeft');
    //       slides.eq(currentSlide).addClass('slideOutLeft');
    //       slides.eq(nextSlide).addClass('slideInRight');
    //     }
    //     else if (currentSlide - nextSlide==1){
    //       slides.removeClass('keepSlideInvisible slideInRight slideOutRight slideInLeft slideOutLeft');
    //       slides.eq(nextSlide).addClass('slideInLeft');
    //       slides.eq(currentSlide).addClass('slideOutRight');
    //     }
    //     else if (nextSlide == 0 ){
    //       slides.removeClass('keepSlideInvisible slideInRight slideOutRight slideInLeft slideOutLeft');
    //       slides.eq(nextSlide).addClass('slideInRight');
    //       slides.eq(currentSlide).addClass('slideOutLeft');
    //     }
    //     else if (currentSlide == 0 && nextSlide != 1){
    //       slides.removeClass('keepSlideInvisible slideInRight slideOutRight slideInLeft slideOutLeft');
    //       slides.eq(nextSlide).addClass('slideInLeft');
    //       slides.eq(currentSlide).addClass('slideOutRight');
    //     }

    // }
    

    
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
