var a = 2,
	b = 10,
	e = 90;

function multiplicar(a, b) {
	// scope da funcao é isolado
	return a * b;
}

console.log(multiplicar(90, 100));

function multiplicar2(b, c) {
	var d = 6,
		e = 8;

	return a * b * c * d;
}

// console.log(d); // d not defined

console.log(multiplicar2(50, 100));


var res1 = multiplicar(2,3);
console.log(multiplicar2(5, res1));