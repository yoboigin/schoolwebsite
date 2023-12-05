$(document).ready(function () {
  var scrollButton = $('.scroll-button');
  var targetSection = $('#major');

  scrollButton.click(function (event) {
      event.preventDefault();
      smoothScroll(targetSection);
  });

  function smoothScroll(target) {
      $('html, body').animate({
          scrollTop: target.offset().top
      }, {
          duration: 1000,
          easing: 'swing'
      });
  }
});
