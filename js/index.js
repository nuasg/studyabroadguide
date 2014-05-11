$( document ).ready(function() {

	$('#map').vectorMap({
	    map: 'world_mill_en',

	    // ocean color
	    //backgroundColor: '#4387B2',
	    backgroundColor: '#505050',

	    // country styles
	   	regionStyle: {
		  initial: {
		    fill: '#FFFEFE',
		    "fill-opacity": 1,
		    stroke: 'none',
		    "stroke-width": 0,
		    "stroke-opacity": 1
		  },
		  hover: {
		    "fill-opacity": 0.8
		  },
		  selected: {
		    fill: 'yellow'
		  },
		  selectedHover: {
		  }
		},

      	// initial country colors
      	/*
	    series: {
	      regions: [{
	        values: {
	            AR: '#92D5FF',
	            GB: '#92D5FF',
	            FR: '#92D5FF'
	        }
	      }]
	    },*/

	    // marker styles
	    markerStyle: {
	      initial: {
	        fill: '#F8E23B',
	        stroke: '#383f47',
	        r: 7
	      }
	    },

	    // marker names
	    markers: [
      		{latLng: [48.85, 2.35], name: 'Paris'},
      		{latLng: [51.50, 0.13], name: 'London'},
      		{latLng: [-34.60, -58.38], name: 'Buenos Aires'}
      		],


      	onMarkerLabelShow: function(e, label, code) {
      		document.body.style.cursor = 'pointer';
        },

        onMarkerOut: function(e, code) {
        	// return to normal cursor
        	document.body.style.cursor = 'default';
    	},

    	onMarkerClick: function(e, code) {
    		if (code==1) {window.location.replace("london.html");}
    	}


	}); 

});