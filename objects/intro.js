var tv = {
	cor: "preta",
	tamanho: "grande",

	canal: 5,
	trocarCanal: function(canalNovo){
		this.canal = canalNovo;		
	}
};

console.log(tv);

console.log(tv.cor);

console.log(tv.cor + " " + tv.tamanho);



tv.cor = "verde";
console.log(tv.cor);


console.log('canal original:' + tv.canal);

tv.trocarCanal(7);

console.log('canal apos troca: ' + tv.canal);