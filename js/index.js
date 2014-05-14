$( document ).ready(function() {

var programs = {
	'AR' : 4,
	'AT' : 2,
	'AU' : 4,
	'BE' : 1,
	'BO' : 2,
	'BR' : 2,
	'CA' : 1,
	'CH' : 1,
	'CL' : 4,
	'CN' : 8,
	'CR' : 1, 
	//'CU' : 2
	'CZ' : 5, 
	'DE' : 7,
	'DK' : 1,
	'DM' : 1,
	'DO' : 1, 
	'EC' : 3,
	'EG' : 2,
	'ES' : 6,
	'FR' : 15,
	'GB' : 13,
	'GH' : 1,
	'GR' : 1,
	'HU' : 1,
	'IE' : 2,
	'IL' : 5,
	'IN' : 6,
	'IT' : 7,
	'JM' : 2,
	'JP' : 6,
	'KR' : 2,
	'MA' : 1,
	'MG' : 1,
	'MX' : 1,
	'NI' : 1,
	'NL' : 1,
	'NZ' : 2,
	'PE' : 1,
	'QA' : 1,
	'RU' : 1, 
	'SN' : 1,
	'TH' : 1,
	'TR' : 2,
	'TZ' : 1,
	'UG' : 2,
	'UY' : 1,
	'VN' : 1,
	'ZA' : 4,
};


$('#map').vectorMap({
    map: 'world_mill_en',
	backgroundColor: null,

	// initial country color
	regionStyle: {
	  //initial: {fill: '#DCF3FF',},
	  initial: {fill: '#eee',},
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
  		// change to pointer/hand
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