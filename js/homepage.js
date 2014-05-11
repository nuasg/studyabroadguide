$( document ).ready(function() {

	$('#map').vectorMap({
	    map: 'world_mill_en',
	    regionStyle: {	hover: {fill: "#A0D1DC"}	}, 
	    focusOn: {
	      x: 0,
	      y: 0,
	      scale: 1
	    },
	    series: {
	      regions: [{
	        values: {
	            US:'#000000'
	        }
	      }]
	    }
	});


});