var inicio = function()
{

var clicBoton= function()
{
	console.log("clic del boton");
	$(".anuncioWeb").html("Clic del boton")
	$(".anuncioWeb").append("Clic del boton")
}

//preparar los eventos 
//de todos mis objetos
$("#miBoton").on("click",clicBoton);
}
//main

$(document).on("ready,inicio");