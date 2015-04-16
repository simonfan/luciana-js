var lista1 = ['cafe', 'sorvete', 'agua', 'refri'],
	lista2 = ['bolo', 'banana', 'nozes'];

// for (var count = 0; count<lista1.length; count++) {
// 	var valor = lista1[count];
// 	console.log(valor)
// }

// for (var count = 0; count<lista2.length; count++) {
// 	var valor = lista2[count];
// 	console.log(valor)
// }

// shortcut do javascript para fazer loop:
// lista1.forEach(function(value){
// 	console.log(value);
// })



// maneira genérica de escrever a função que será executada no loop depois
// ela poderia ser executada em qualquer contexto
function printNaTela(value){
	console.log(value);
}


lista1.forEach(printNaTela);


lista2.forEach(printNaTela);