// $.ajax("dados.json", {
// 	complete: function(res) {
// 		var responseJson = JSON.parse(res.responseText)
// 		console.log(responseJson);

// 		var stringJson = JSON.stringify(responseJson)
// 		console.log(stringJson)
// 	}
// })

$.ajax("http://localhost:8081/jquery/projeto2/estilos/1.json", {
	complete: function(res) {
		console.log("received response")
		$("#id1").css(res.responseJSON)
	}
})

console.log("oi")


$('#get').on('click', function() {

	var url = 'http://localhost:2403/pet/' + $('#id').val();

	$.ajax(url, {
		method: 'GET',

		complete: function (res) {
			var pet = res.responseJSON;

			$('#id').val(pet.id);
			$('#nome').val(pet.nome);
		}
	})
})

$("#submit").on("click", function() {
	$.ajax("http://localhost:2403/pet/", {
		method: "POST",
		data: {
			nome: $("#nome").val(),
			idade: parseInt($("#idade").val()),
			tipo: $("#tipo").val(),
			raca: $("#raca").val()
		},

		complete: function (res) {


			$('#id').val(res.responseJSON.id);
		}
	})
})

$("#update").on("click", function() {

	var url = "http://localhost:2403/pet/" + $('#id').val();

	$.ajax(url, {
		method: "PUT",
		data: {
			nome: $("#nome").val(),
			idade: parseInt($("#idade").val()),
			tipo: $("#tipo").val(),
			raca: $("#raca").val()
		},

		complete: function () {
			alert('foi')
		}
	})
})

