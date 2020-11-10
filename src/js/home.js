//= libs/owl.carousel.min.js

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    margin: 24,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 500,
    items: 3,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  })
})
