// var jqDocument = jQuery(document);


// jQuery(document)
// 	jQuery('button').click(function () {
// 		alert('weqwe')
// 	});


console.log(document);

// 1 selecionar um elemento DOM
var botoes = document.getElementsByClassName("botaoOi");




// 2 prestar atenção (ouvir) um evento, escolher qual é o 
// evento e definir a função a ser executada qdo o evento ocorre
for (var count = 0; count < botoes.length; count ++){



	// var botoesTextOriginal = botoes[count].innerHTML;


	botoes[count].addEventListener("mouseover", function(){

		this.innerHTML = "<p>tchau</p>";
		this.style.fontSize = "30px";
	})



	botoes[count].addEventListener("mouseout", function(){
		this.innerHTML = 'botoesTextOriginal';
	})


}

// botoes[0].addEventListener("mouseover", function(){
// 	botoes[0].innerHTML = "<p>tchau</p>";
// 	botoes[0].style.fontSize = "30px";
// })
