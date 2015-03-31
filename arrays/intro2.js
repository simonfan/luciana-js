var cafes = ["vanilla", 5.50, "morango", "chantili"];


var cadaCafe = {
	nome: "melita",
	"preço": 5.50,
	acompanhamentos: ["morango", "chantili"]
}

var cafes2 = ["melita", "do ponto", "3 corações", "pilão"];
var frutas = ['banana', 'maca', 'mamao', 'pera', 'uva'];


var listas = [cafes, cafes2, frutas];



function printOnScreen (listaNome) {
	for (var count = 0; count < listaNome.length; count ++) {
		console.log(listaNome[count]);
	}
}

for (var count = 0; count < listas.length; count ++) {
	printOnScreen(listas[count])
}