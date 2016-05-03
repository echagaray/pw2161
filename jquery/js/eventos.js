var inicio = function()
{

var clicBoton= function()
{
	console.log("clic del boton");
	//$(".anuncioWeb").html("Clic del boton")
	$(".anuncioWeb").append("Clic del boton")
}

//preparar los eventos 
//de todos mis objetos
//	º	$("#miBoton").on("click",clicBoton);
}
//main

$(document).on("ready,inicio");

var clicBoton2= function()
{
	beforeSend:function(){
console.log("Espere..");
	},
	$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data){
  console.log(data);
  alert(data.results[0].name.first+
  	data.results[0].name.last);


},
error: function(xhr,error,throws){
console.log("ocurrio un error");

}
  	);
  }
});
     
}	

var clicBoton2= function(tecla)
{
	if (tecla.which == 13)
	{
$("·#otroInput").focus():

	}
}
	$(".anuncioWeb").off("click","Clic del boton")
	$(".anuncioWeb").on("click","Clic del boton2")
	$("#unInput").on("keypress",teclaUnInput);


//preparar los eventos 
//de todos mis objetos


$(document).off("ready,inicio");



