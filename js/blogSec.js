$(document).ready(function () {
  var typed = new Typed(".typing", {
    strings: ["Read Our Blogs....", "About Latest News....", "A Lots More...."],
    typeSpeed: 150,
    backSpeed: 80,
    loop: true
  });
  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay:true,
    autoplayTimeOut: 10,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });


});
