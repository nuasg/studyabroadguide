$( document ).ready(function() {

var programs = {
	'AR' : 8,
	'AT' : 8,
	'AU' : 8,
	'BE' : 8,
	'BO' : 8,
	'BR' : 8,
	'CA' : 8,
	'CH' : 8,
	'CL' : 8,
	'CN' : 8,
	'CR' : 8, 
	//'CU' : 2
	'CZ' : 8, 
	'DE' : 8,
	'DK' : 8,
	'DM' : 8,
	'DO' : 8, 
	'EC' : 8,
	'EG' : 8,
	'ES' : 8,
	'FR' : 15,
	'GB' : 13,
	'GH' : 8,
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
	'MG' : 8,
	'MX' :8,
	'NI' : 8,
	'NL' : 8,
	'NZ' : 8,
	'PE' : 8,
	'QA' : 8,
	'RU' : 8, 
	'SN' : 8,
	'TH' : 8,
	'TR' : 8,
	'TZ' : 8,
	'UG' : 8,
	'UY' : 8,
	'VN' : 8,
	'ZA' : 8,
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
        fill: '#D455E5',
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
		if (code==1) {window.location.replace("london.html");}
		else if (code==2) {window.location.replace("buenos-aires.html");}
    	}
    }); 

});