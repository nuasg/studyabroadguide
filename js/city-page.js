$( document ).ready(function() {
	$('[data-toggle=tab]').click(function(){
		var myClass = $(this).children().attr("class");
		alert(myClass);
	});
});