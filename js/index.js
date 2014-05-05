$( document ).ready(function() {
	$('.program-4').show();

	$('.program-list').click(function() {

		var $id = this.id;
		//alert($id);
		$('.program-info').hide();
	    $('.' + $id).show("slide", {
	        direction: "right"
	    }, 300);

	    //$(".program-list").css({'background-color': 'transparent'}); 
	    //$('#'+ $id).css({'background-color': '#aaa'}); 
	    
	    $('li').removeClass('selected');
    	$(this).addClass('selected');
	});
});