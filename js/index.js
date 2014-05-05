$( document ).ready(function() {
	$('.btn').click(function() {
		var $id = this.id;
		$('.box').hide();
	    $('.' + $id).show("slide", {
	        direction: "right"
	    }, 500);

	});
});