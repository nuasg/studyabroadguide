$( document ).ready(function() {

// Feedback
$("#feedback").submit(function(e) {
  e.preventDefault();
  console.log("wow");

  $.ajax({
    url: "/feedback",
    type: "post",
    data: $("#feedback").serialize()
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
