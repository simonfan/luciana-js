$(document).on("ready", function(){

	function renderizarCidade (dadosDaCidade){

		var html = "<li>";
		html = html + '<h1 class="destinoNome">' + dadosDaCidade.nome + '</h1>';
		html = html + '<p class="destinoIdade">' + dadosDaCidade.idade + '</p>';
		html = html + '<img class="destinoImg" src="' + dadosDaCidade.imagem + '">';
		html = html + "</li>";
		
		$("#listaCidades").append(html);

	}

	$("#form1").on("submit", function(e){

		var nome = $("#nome").val();
		var idade = $("#idade").val();
		var img = $("#imagem").val();

		$.ajax("http://localhost:2403/lugares", {
			method: "POST",
			data: {
				nome: nome,
				idade: idade,
				imagem: img,
			},
			complete: function(res){

				renderizarCidade(res.responseJSON);
				// console.log(res);
				// $(".destinoNome").html(res.responseJSON.nome)
				// $(".destinoIdade").html(res.responseJSON.idade)
				// $(".destinoImg").attr("src", res.responseJSON.imagem)

			}

		})

		e.preventDefault();
	})


	$("#form2").on("submit", function(e){

		var nomeLugar = $("#nome-lugar").val();

		$.ajax("http://localhost:2403/lugares", {
			method: "GET",
			data: {
				nome: nomeLugar
			},
			complete: function(res){
				console.log(res);

				var data = res.responseJSON;
				for (var count = 0; count < data.length; count++){
					var cidade = data[count];

					renderizarCidade(cidade);

				}

			

				// $("#destinoNome").html(res.responseJSON.nome)
				// $("#destinoIdade").html(res.responseJSON.idade)
				// $("#destinoImg").attr("src", res.responseJSON.imagem)
			}
		})

		e.preventDefault();
	})

})