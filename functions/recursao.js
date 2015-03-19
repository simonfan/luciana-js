// eleve a o valor 2 a 4a.
var base = 2,
	res;
for (var count = 0; count < 4; count++){

	if (res === undefined) {
		res = 1;
	}

	res = res * base;
}

console.log(res);

// cria a funcao exponenciar
function exponenciar(base, expoente){
	var res;
	for (var count = 0; count < expoente; count++){
		if (res === undefined){
			res = 1;
		}

		res = res * base;
	}

	return res;
}

console.log(exponenciar(2,3));


function exponenciar2(base, expoente) {


	console.log(base + ' elevada a ' + expoente);

	if (expoente === 0) {
		return 1;
	} else {

		var parcial = exponenciar2(base, expoente - 1);

		console.log('multiplicar ' + base + ' por ' + parcial);

		return base * parcial;
	}

}

console.log(exponenciar2(3, 3));