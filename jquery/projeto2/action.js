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

