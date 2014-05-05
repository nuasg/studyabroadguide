$( document ).ready(function() {
	$('.program-4').show();

	$('.program-list').click(function() {

		var $id = this.id;
		//alert($id);
		$('.program-info').hide();
	    $('.' + $id).show("slide", {
	        direction: "right"
	    }, 300);
	    $('li').removeClass('selected');
    	$(this).addClass('selected');
	});


	$('.eat-place-1').show();


	$('.eat-list').click(function() {

		var $id = this.id;
		$('.eat-info').hide();
	    $('.' + $id).show("slide", {
	        direction: "right"
	    }, 300);
	    $('li').removeClass('selected');
    	$(this).addClass('selected');
	});

});