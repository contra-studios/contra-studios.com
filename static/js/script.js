$(function() {

  //var slides = $('.topAnimation');
  

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
    draggable: false

//For using slick's animation, does not work on slick-cloned slides
   // }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
   //  // var slides = $('.topAnimation');
   //  // if(currentSlide!=nextSlide) {
   //  //   // slides.removeClass('topAnimationIn topAnimationOut invisible');
   //  //   slides.removeClass('invisible');
   //  //   slides.eq(currentSlide+1).removeClass('topAnimationIn');
   //  //   slides.eq(nextSlide+1).removeClass('topAnimationOut');
   //  //   slides.eq(nextSlide+1).addClass('topAnimationIn slick-current');
   //  //   slides.eq(currentSlide+1).addClass('topAnimationOut');
   //    // if (currentSlide==0 && nextSlide>2) {
   //    //   slides.eq(-1).addClass('topAnimationIn');
   //    // }
   //    // if(currentSlide<nextSlide) {
   //    //   for(i=currentSlide+1; i<nextSlide; i++){
   //    //     slides.eq(i).addClass('invisible');
   //    //   }
   //    // }
   //    // else {
   //    //   if (nextSlide==2){
   //    //     slides.eq(currentSlide+1).addClass('invisible');
   //    //     slides.eq(currentSlide+2).addClass('invisible');
   //    //     slides.eq(currentSlide+3).addClass('topAnimationIn');
   //    //   }
   //    //   else if (nextSlide==1){
   //    //     slides.eq(0).addClass('invisible');
   //    //     slides.eq(currentSlide+1).addClass('invisible');
   //    //   }
   //    //   else if (nextSlide==0){
   //    //     slides.eq(currentSlide+1).addClass('invisible');
   //    //     slides.eq(currentSlide+2).addClass('invisible');
   //    //     slides.eq(currentSlide+3).addClass('topAnimationIn');
   //    //   }
   //    // }



// FOR using animate.css could not get sliding out to work
   //  } 
    // if(currentSlide != nextSlide){
    //     if(currentSlide - nextSlide<=-1) {
    //       if(currentSlide == 0 && nextSlide>3) {
    //         slides.removeClass('keepSlideInvisible slideInRight slideOutRight slideInLeft slideOutLeft');
    //         slides.eq(nextSlide).addClass('slideInLeft');
    //         slides.eq(currentSlide).addClass('slideOutRight');
    //       }
    //       else {
    //         slides.removeClass('keepSlideInvisible slideInRight slideOutRight slideInLeft slideOutLeft');
    //         slides.eq(currentSlide).addClass('slideOutLeft');
    //         slides.eq(nextSlide).addClass('slideInRight');
    //       }
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
      focusOnSelect: false,
      draggable: false,
      mobileFirst: true,
      speed: 1000
    });
});

  $('.topSlider').show();
  $('.buttonSlider').show();
  $('.bottomSlider').show();
});


