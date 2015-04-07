$(document).on("ready", function() {
	var toDrag = $("#toDrag");
	var body = $("body");
	var spaceDrop = $("#spaceDrop");
	var target = $("#target");
	var arrastar = function(e) {
			toDrag.css({
				top: e.clientY - (toDrag.height()/2),
				left: e.clientX - (toDrag.width()/2),
			})
			spaceDrop.css({
				backgroundColor: "green",
				height: e.clientY,
				width: e.clientX
			})
		}

	toDrag.on("mousedown", function() {
		body.on("mousemove", arrastar)
	})

	toDrag.on("mouseup", function(e){
		body.off("mousemove", arrastar)
		// alert(e.clientY + ", " + e.clientX)
		var topMouse = e.clientY - (toDrag.height()/2);
		var leftMouse = e.clientX - (toDrag.width()/2);

		var targetTop = parseInt(target.css("top")); //para pegar a posição do elemento na pag, é melhor usar offset().top;
		var targetLeft = parseInt(target.css("left"));
		var targetRight = targetLeft + target.width();
		var targetBottom = targetTop + target.height();

		// verificar se a posição do mouse está dentro da div target
		if (topMouse >= targetTop &&
			topMouse <= targetBottom && 
			leftMouse >= targetLeft && 
			leftMouse <= targetRight){
			target.css({
				backgroundColor: "green"
			})
		} else{
			target.css({
				backgroundColor: "red"
			})
		}
	})
})
