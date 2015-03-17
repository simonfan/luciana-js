// for (var hash = "#"; hash <=7; hash + "#") {
// 	console.log(hash);
// 	// hash = hash +"#;
// }

/*

1 #
2 ##
3 ###
4 ####
5 #####
6 ######
7 #######
  1234567
 
 */


// for (var linha = 1; linha <=7; linha++) {
	
// 	var conteudo = "";

// 	for (var coluna = 1; coluna <= linha; coluna++){
// 		conteudo = conteudo + "#";
// 	}

// 	console.log(conteudo);

// }


// 1 escrever uma linha com 5 '#'s

// console.log("#####");


// funcao que escreva uma lina com X '#'s

function writeLine(x) {

	var pedaco = "#";

	// passo 1: definir a variavel na qual guardar o resultado
	var resultado = "";

	// passo 2: calcular o resultado e ir guardando na variavel do resultado
	for(var contador = 0; contador < x; contador++) {
		resultado = resultado + pedaco;
	}

	// passo 3: colocar resultado na tela
	console.log(resultado);
}


// writeLine(9);

/******** escreva 7 linhas com 5 '#' cada
********/ 

// for (var line = 1; line <= 7; line++) {
// 	writeLine(5);
// };


/******** escreva piramide de 7
********/ 

// for (var line = 1; line <= 7; line++) {
// 	writeLine(line);
// };


/******** escreva uma funcao que desenhe na tela um triangulo ret. isosceles de cateto k;
********/

// var k = 10;
// for (var line = 1; line <= k; line++) {
// 	writeLine(line);
// };


/******** escreva uma funcao que desenhe na tela um triangulo ret. isosceles de cateto k;
********/
function piramide (k){
	for (var line = 1; line <= k; line++) {
		writeLine(line);
	};	
}

// piramide(50);