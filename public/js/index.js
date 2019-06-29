'use strict';
/**
 * @see initiated AOS library
 */
AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
});
AOS.refresh({
  offset: 120,
  delay: 200,
  duration: 1500,
});
AOS.refreshHard({
  offset: 120,
  delay: 200,
  duration: 1500,
});

/**
 * @see initiated owl.carousel library
 */
$(document).ready(function() {
  // client feedback
  $('.onsi-feedback').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  // showcases
  $('.onsi-showcases').owlCarousel({
    loop: true,
    margin: 10,
    // center: true,
    // autoWidth: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  });

  // services
  $('.onsi-services').owlCarousel({
    stagePadding: 35,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});
