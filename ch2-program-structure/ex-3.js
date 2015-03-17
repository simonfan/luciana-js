// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character.
// The characters should form a chess board.

// Passing this string to console.log should show something like this:
//  01234567
//0  # # # #
//1 # # # # 
//2  # # # #
//3 # # # #
//4  # # # #
//5 # # # #
//6  # # # #
//7 # # # #

// dado
var espaco = ' ';
var sostenido = '#';
// escreva ' # # # #'
//          01234567


function linhaPar () {

	// passo 1: definir onde vai guardar o resultado
	var resultado = "";

	// passo 2: construir o resultado
	// obs: resultado = espaco + sostenido (4x)

	for (var repeticao = 0; repeticao < 8; repeticao++){
		if (repeticao % 2 == 0){
			resultado = resultado + espaco;
		} else{
			resultado = resultado + sostenido;
		}
	}
	// passo 3: imprimir o resultado
	console.log(resultado);
}

function linhaImpar () {

	// passo 1: definir onde vai guardar o resultado
	var resultado = "";

	// passo 2: construir o resultado
	// obs: resultado = espaco + sostenido (4x)

	for (var repeticao = 0; repeticao < 8; repeticao++){
		if (repeticao % 2 == 0){
			resultado = resultado + sostenido;
		} else{
			resultado = resultado + espaco;
		}
	}
	// passo 3: imprimir o resultado
	console.log(resultado);
}






for (var repeticao = 0; repeticao < 8; repeticao++){
	if (repeticao % 2 == 0){
		//par
		linhaPar();
	} else {
		//impar
		linhaImpar();
	}
}






