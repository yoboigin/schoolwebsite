document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var headerText = document.querySelector('.header-text');
    var position = headerText.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (position < windowHeight - 50) {
      headerText.classList.add('reveal');
    }
  });
});
