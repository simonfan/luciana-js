// Write a function min that takes two arguments and returns their minimum.

function min(a, b){
	if (a < b){
		return a;
	} else {
		return b;
	}
}

console.log(min(34,89));


//Write a function min that takes 3 arguments and returns their minimum.

function min3(a, b, c) {
	if (a < b && a < c){
		return a;
	} else if (b < a && b < c){
		return b;
	} else {
		return c;
	}
}

console.log(min3(2,567,432));