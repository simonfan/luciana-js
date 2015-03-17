// print a string
console.log('kjhwejrhejhrwekj')


// dados 
var cumprimento = 'Oi';
var virgula = ',';
var nome = 'Joao';
var espaco = ' ';
// escreva na tela a frase 'Oi, Joao'

console.log(cumprimento + virgula + espaco + nome);

// dado
var vogal = 'a';
// escreva na tela 'aaaaa'
console.log(vogal+vogal+vogal+vogal+vogal);

// complete o seguinte codigo de modo que o resultado seja 'aaaaa';
var resultado = vogal+vogal+vogal+vogal+vogal;
console.log(resultado);

// dado
var letra = 'b';
// definir o que vai construir
var resultado = '';
// escreva na tela 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'  30x
// construir
for (var repeticoes = 0; repeticoes < 30; repeticoes++){
	resultado = resultado + letra;
}

// escrever
console.log(resultado);
console.log(resultado.length);


for (var contador = 0; contador < 30; contador++) {
	console.log('a');
}