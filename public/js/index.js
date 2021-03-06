$( document ).ready(function() {

var is_safari = navigator.userAgent.indexOf("Safari") > -1;

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
    success: function() {
      console.log("Success!");
      $('#myModal').modal('hide');
      setTimeout(function (){
        $('#thank-you').modal('show');
             }, 300); // how long do you want the delay to be?
    }
  });

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

var programs = {};


$('#map').vectorMap({
    map: 'world_mill_en',
	backgroundColor: null,

	// initial country color
	regionStyle: {
	  initial: {fill: '#8F8E89',},
	},

	// initial color from data
	series: {
	    regions: [{
	      values: programs,
	      scale: ['#C8EEFF', '#0071A4'],
	      normalizeFunction: 'polynomial'
	    }]
	},

	// show number of programs on hover
    onRegionLabelShow: function(e, el, code){
    if (programs[code]) {
    	el.html(el.html()+' (Programs - '+programs[code]+')');
    	}
    },

    // marker styles
    markerStyle: {
      initial: {
        fill: '#E5323F',
        stroke: '#383f47',
        r: 5
      }
    },

    // marker names
    markers: [
  		{latLng: [48.86, 2.35], name: 'Paris'},
  		{latLng: [51.51, 0.13], name: 'London'},
  		{latLng: [-34.60, -58.38], name: 'Buenos Aires'},
      {latLng: [50.73, 7.10], name: 'Bonn (New!)', style: {fill: 'yellow'}},
      {latLng: [52.52, 13.38], name: 'Berlin (New!)', style: {fill: 'yellow'}},
      {latLng: [48.13, 11.57], name: 'Munich (New!)', style: {fill: 'yellow'}},
      {latLng: [41.38, 2.18], name: 'Barcelona (New!)', style: {fill: 'yellow'}},
      {latLng: [55.68, 12.57], name: 'Copenhagen (New!)', style: {fill: 'yellow'}}
    ],


  	onMarkerLabelShow: function(e, label, code) {
  		// change to pointer/hand
  		document.body.style.cursor = 'pointer';
    },

    onMarkerOut: function(e, code) {
    	// return to normal cursor
    	document.body.style.cursor = 'default';
	},

	onMarkerClick: function(e, code) {
    switch (parseInt(code)) {
      case 0:
        window.location.assign("paris");
        break;
      case 1:
        window.location.assign("london");
        break;
      case 2:
        window.location.assign("buenos-aires");
        break;
      case 3:
        window.location.assign("bonn");
        break;
      case 4:
        window.location.assign("berlin");
        break;
      case 5:
        window.location.assign("munich");
        break;
      case 6:
        window.location.assign("barcelona");
        break;
      case 7:
        window.location.assign("copenhagen");
        break;
    }
  }
});

});
