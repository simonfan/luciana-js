var prato = {};

prato.ingredientes = ["arroz"];
prato.tempero = "alecrim";

prato.adicionarIngrediente = function(ingredienteAdicional){
	this.ingredientes.push(ingredienteAdicional);
	return this;
}

console.log(prato.adicionarIngrediente("feijão"));
