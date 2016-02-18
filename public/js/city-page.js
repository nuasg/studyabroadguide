$( document ).ready(function() {

var is_safari = navigator.userAgent.indexOf("Safari") > -1;

// Feedback
$("#feedback").submit(function(e) {

  // safari doesn't support HTML5 form validation so we have to make it
  if (!($('#feedback')[0].checkValidity())) {
    if (is_safari) {
      return false;
    } else {
      return true;
    }
  }

  e.preventDefault();

  $.ajax({
    url: "/feedback",
    type: "post",
    data: $("#feedback").serialize(),
    success: function(data) {
      alert(data.result);
    }
  });
  $("#feedback")[0].reset();
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

});
