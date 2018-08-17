$('form input').on('keypress', function (e) {
  return e.which !== 13
});

$('.form-message').keypress(function(event) {
   if (event.which == 13) {
      event.stopPropagation();
   }
})


