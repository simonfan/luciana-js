// dadas as seguintes funcoes
function somar5(valor) {
	return valor + 5;
}

function subtrair3(valor) {
	return valor - 3;
}

// faça as seguintes transformações
// 5 -> 10
var v1 = 5;
var resultado1 = somar5(v1);
console.log(resultado1);

// 4 -> -2
var v2 = 4;
var resultadoParcial = subtrair3(v2);
var resultado2 = subtrair3(resultadoParcial);
console.log(resultado2);


// 5 -> 21
var v3 = 5;
v3 = somar5(v3);
v3 = somar5(v3);
v3 = somar5(v3);
v3 = somar5(v3);
v3 = somar5(v3);
v3 = subtrair3(v3);
v3 = subtrair3(v3);
v3 = subtrair3(v3);
console.log(v3);

// 6 -> -15
var v4 = 6;
for (var i = 0; i < 7; i++) {
	v4 = subtrair3(v4);
}

console.log(v4);

// 9 -> 16
var v5 = 9;
console.log(subtrair3(somar5(somar5(v5))));

console.log(somar5(somar5(subtrair3(v5))));

////////////////
// composicao //
// escreva uma funcao que some 15 a um valor
// 
function somar15(valor){
	return somar5(somar5((somar5(valor))));
}

console.log(somar15(5));

// escreva uma funcao que some 2 a um valor
function somar2(valor){
	var res = somar5(valor);
	res = subtrair3(res);

	return res;
}

console.log(somar2(10));

// somar 2 a pares e 5 a impares
function somar2ou5(valor) {
	if (valor % 2 == 0){
		return somar2(valor);
	} else {
		var restaSoma = somar5(valor);
		return restaSoma;
	}
}

function somar2ou5v2(valor) {
	// declara onde vai ficar o resultado
	var res;

	// faz o processamento e atribui o resultado do processamento
	// a variavel em que vai ficar o resultado
	if (valor % 2 == 0) {
		res = somar2(valor);
	} else {
		res = somar5(valor);
	}

	// retorna o resultado
	return res;
}

function somar2ou5v3(valor) {
	// operador ternario: (condicao) ? caso condicao seja verdadeira : caso condicao seja falsa;
	return (valor % 2 == 0) ? somar2(valor) : somar5(valor);
}

console.log(somar2ou5(20));
console.log(somar2ou5(11));