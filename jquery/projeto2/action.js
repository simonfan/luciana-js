// $.ajax("dados.json", {
// 	complete: function(res) {
// 		var responseJson = JSON.parse(res.responseText)
// 		console.log(responseJson);

// 		var stringJson = JSON.stringify(responseJson)
// 		console.log(stringJson)
// 	}
// })

$.ajax("http://localhost:8080/jquery/projeto2/estilos/1.json", {
	complete: function(res) {
		console.log("received response")
		$("div").css(res.responseJSON)
	}
})

console.log("oi")