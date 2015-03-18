// definição da função
function nomeDaFuncao(argumento1, argumento2) {
	// corpo da função
	console.log("argumento1:");
	console.log(argumento1);


	console.log("argumento2:");
	console.log(argumento2);
}


// invocação da função
var valor1 = 2, valor2 = 4;
nomeDaFuncao(valor1, valor2);
// ou:
nomeDaFuncao("banana", "ana", 'outro argumento qwojeqwoeij');

nomeDaFuncao();

console.log('=================')

// retorno de uma funcao
function grudarDuasStrings(string1, string2) {
	var grude = string1 + string2;


	return grude; // a partir daqui nada mais sera executado

	console.log('23232');

}

var resultado = grudarDuasStrings("oi, ", "tudo bem?");
console.log(resultado);

console.log(grudarDuasStrings("você ", "vem?"));

