// o bonus de colocar na variável é que, se mudar o html,
// é mais facil mudar somente aqui
var botao = $("#botao1");

var mexerBotao = function (e) {
	botao.css({
		position: "absolute",
		top: e.clientY - (botao.height()/2),
		left: e.clientX - (botao.width()/2),
	})
};

botao.on("click", function() {
	// this.css("color", "verde");
	$(this).css({
		"color": "green",
		"font-size": "16pt",
	});
	$("body").off("mousemove", mexerBotao)
})

$(".textArea").on("keyup", function(event) {
	console.log("keyup")
	console.log(event)
})

// verifique no browser como localizar a posição do mouse
// fazer com que o botão siga o movimento do mouse
// centralizar o mouse no meio do botão
$("body").on("mousemove", mexerBotao)

$("body").on("mousemove", function (e) {
	console.log(e)
	console.log(e.clientX + "," + e.clientY)
})
