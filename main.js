$(document).ready(function() {
  scrolled = true;

  $(document).scroll(function() {
    let scrollPosition = window.scrollY;

    if (scrollPosition !== 0) {
      $('header').addClass('shrinkHeader');
      $('.logoContainer img').addClass('shrinkLogo');
      $('.navItem').addClass('shrinkNavItem');

      // if (scrolled) {
      //   window.scrollTo({
      //   	top: document.getElementById('aboutSection').offsetTop - 70,
      //   	behavior: 'smooth'
      //   })
      //   scrolled = false;
      // }


    } else {
      $('header').removeClass('shrinkHeader');
      $('.logoContainer img').removeClass('shrinkLogo');
      $('.navItem').removeClass('shrinkNavItem');
    }
  })
});
function sortSamples(target) {
  debugger;
  //update buttons
  $('.sampleSortingButtons button').removeClass('activeButton');
  $('button.' + target).addClass('activeButton');

  if (target === 'individualSample') {
    $('button.all').addClass('activeButton');
  }

  //samples
  $('.individualSample').not('.' + target).css('display', 'none');
  $('.' + target).not('button.' + target).css('display', 'inline-block');
}
