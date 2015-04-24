var $elemento = $('#ola');


$.prototype.explode = function(){
	$(this).css("background-color", "red")
}

$.prototype.grow = function(height){
	var currentHeight = $(this).height();
	$(this).css("height", currentHeight + height)
}


function grow(selector, height) {
	var currentHeight = $(selector).height();
	$(selector).css("height", currentHeight + height)
}


$.prototype.run = function (distance) {

	var $el = $(this);


	var duration = $el.attr('duration');

	if (duration) {


		$el.animate({
			marginTop: distance,
		}, {
			duration: parseInt(duration)
		})
	}

}


grow('#ola', 6);

var elemento = $('#ola');

elemento.grow(25);