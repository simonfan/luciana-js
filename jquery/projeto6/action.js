$("[width]").each(function(){
	var width = $(this).attr("width")
	$(this).css("width", width + "%");

	console.log(width);

})