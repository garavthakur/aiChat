jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() >= 250) {
    jQuery("header").addClass("fixed");
  } else {
    jQuery("header").removeClass("fixed");
  }
});
