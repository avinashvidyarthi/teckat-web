'use strict';
/**
 * @author ONSI India
 */
const copyrightYear = document.querySelector('#copyright-year');

/**
 * passive listen
 */
// document.addEventListener('touchstart', onTouchStart, { passive: true });

/**
 * web share api
 */

let share = document.querySelector('#share');
share.addEventListener('click', (e) => {
  e.preventDefault();
  if (navigator.share) {
    console.log(`share API is available on this device.`);
    navigator
      .share({
        title: document.title,
        text: 'A True Solution',
        url: window.location.href,
      })
      .then(() => {
        console.log(`successfully shared`);
      })
      .catch((err) => {
        console.log(`unsuccessful share attempt.`);
      });
  } else {
    console.log(`share API not available on this device.`);
    alert('At This Moment share Feature Is not available on Your Device.');
  }
});

/**
 * sidenav bar
 */

// swipe event
// swipe to right
let touchstartX = 0;
let touchendX = 0;

let gesuredZone = document.querySelector('body');

gesuredZone.addEventListener(
  'touchstart',
  function(event) {
    touchstartX = event.changedTouches[0].screenX;
    // console.log(`console logs: touchstartX`, touchstartX);
  },
  false
);

gesuredZone.addEventListener(
  'touchend',
  function(event) {
    touchendX = event.changedTouches[0].screenX;
    // console.log(`console logs: touchendX`, touchendX);
    handleGesure();
  },
  false
);
function handleGesure() {
  let swiped = 'swiped: ';
  if (touchstartX < 50 && touchendX > touchstartX) {
    // console.log(swiped + 'right!');

    // activate sidebar
    $(document).ready(function() {
      $('#sidebar').addClass('active');
      $('.overlay').addClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
  }
}

$(document).ready(function() {
  $('#sidebar').mCustomScrollbar({
    theme: 'minimal',
  });

  $('#dismiss, .overlay').on('click', function() {
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
  });

  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').addClass('active');
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});

/**
 * footer
 * copyright year
 */
(() => {
  copyrightYear.textContent = new Date().getFullYear();
})();

// console.log(`i am from app.js`);

/**
 * service works area
 */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.min.js')
    .then((reg) => console.log('service worker registered'))
    .catch((err) => console.log('service worker not registered', err));
}
