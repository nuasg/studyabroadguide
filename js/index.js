$( document ).ready(function() {

$( "#submit" ).click(function() {
  $('#myModal').modal('hide');
  setTimeout(function (){
    $('#thank-you').modal('show');
         }, 300); // how long do you want the delay to be? 
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
})

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
  		{latLng: [48.85, 2.35], name: 'Paris'},
  		{latLng: [51.50, 0.13], name: 'London'},
  		{latLng: [-34.60, -58.38], name: 'Buenos Aires'}
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
		if (code==0) {window.location.replace("paris.html");}
		else if (code==1) {window.location.replace("london.html");}
		else if (code==2) {window.location.replace("buenos-aires.html");}
    	}
});

});