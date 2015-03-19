// funcoes puras
// escreva uma funcao que calcule o resultado da multiplicacao
// de dois valores

function multiply(valor1, valor2) {
	return valor1 * valor2;
}

var res = multiply(4, 5);
console.log(res) // 20

// funcao com side-effects
// escreva uma funcao que calcule o resultado de uma 
// multiplicacao de dois valoes e guarde o resultado 
// na variael x
var x;
function multiply2(val1, val2) {
	x = val1 * val2;
}

var res2 = multiply2(4, 5);
console.log(res2) // undefined
console.log(x) // 20