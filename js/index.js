$( document ).ready(function() {
	

	$('#test2').click(function() {
		
	    $('.try').show("slide", {
	        direction: "left"
	    }, 2000);
	    $('.try2').hide("slide", {
	        direction: "right"
	    }, 2000);
	});


});