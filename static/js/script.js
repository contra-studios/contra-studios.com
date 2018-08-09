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
});});


// $(document).ready(function () {
//  $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav',
//   draggable: false
// });});

// $(document).ready(function () {
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: false,
//   centerMode: false,
//   focusOnSelect: true,
//   draggable: false
// });});
