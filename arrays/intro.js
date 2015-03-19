var lista = ["a", "2", 5, "simon"];
console.log(lista);

console.log(lista[2]);

console.log(lista.length);


// imprima apenas o ultimo valor da lista
console.log(lista[lista.length - 1]);

// imprima todos os valores da lista na tela
// iteracao sobre arrays
function imprimirValores(lista) {

	console.log('====')
	for (var count = 0; count < lista.length; count++) {
		console.log(lista[count]);
	}

	console.log('====')

}

imprimirValores(lista);

// adicione um valor ao final da lista
lista.push(467);
imprimirValores(lista);

// adicione um valor no comeco da lista
lista.unshift("luciana");
imprimirValores(lista);


// remova o ultimo valor da lista
lista.pop();
imprimirValores(lista);


// remova o primeiro valor da lista
lista.shift();
imprimirValores(lista);

// remova todos os elementos da lista
// var lengthOriginal = lista.length;
// for (var count = 0; count < lengthOriginal; count++) {
// 	lista.shift();
// 	console.log(lista);
// }

while (lista.length > 0){
	lista.shift();
}
console.log(lista);
