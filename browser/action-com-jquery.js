var botoes = jQuery(".botaoOi");



var cores = ['black', 'blue', 'yellow', 'orange'];
var tamanhos = ['20px', '12px', '18px', '10px', '100px'];

botoes.on("click", function(){


	var botao = jQuery(this);
	botao.html("novo botão");


	var tempoTotal = 6000;

	var estados = [
		{
			padding: tamanhos[3],
			marginTop: tamanhos[1],
			fontSize: tamanhos[4],
		},
		{
			color: cores[3],
			fontSize: tamanhos[0],
		},
		{
			color: cores[2],
			fontSize: tamanhos[4],
		},
		{
			color: cores[1],
			fontSize: tamanhos[2],
		},
		{
			color: cores[0],
			fontSize: tamanhos[3],
		},
		{
			color: cores[3],
			fontSize: tamanhos[1],
		},
		{
			color: cores[2],
			fontSize: tamanhos[0],
		},
		{
			color: cores[0],
			fontSize: tamanhos[4],
		},
	];


	// botao
	// 	.animate(estados[0], 1000)
	// 	.animate(estados[1], 1000)

	for (var count = 0; count < estados.length; count ++){
		botao.animate(estados[count], 400)
	}

	for (var reverseCount = estados.length; reverseCount > 0; reverseCount--) {
		botao.animate(estados[reverseCount], 400)
	}


	console.log('qweqweqwe ')
})
