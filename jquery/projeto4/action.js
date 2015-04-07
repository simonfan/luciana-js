$(document).on("ready", function(){
	$("#novo").on("submit", function(e){

		var titulo = $("#titulo").val();
		var descricao = $("#descricao").val();
		var imagem = $("#imagem").val();
		var preco = $("#preco").val();

		$.ajax("http://localhost:2403/comidas/", {
			data:{
				titulo: titulo.toUpperCase(),
				descricao: descricao,
				imagem: imagem,
				preco: preco
			},

			complete: function(res){
				alert("ok");
				console.log(res);
			},

			method: "POST"
		})

		e.preventDefault();
	})
})