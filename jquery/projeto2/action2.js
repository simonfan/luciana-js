$.ajax("http://www.aluguetemporada.com.br/imovel/p584193349", {
	complete: function(res) {
		console.log("received response")

		console.log(res);
		$("#id2").css(res.responseJSON)
	}
})