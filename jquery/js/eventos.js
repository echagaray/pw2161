var inicio = function()
{

var clicBoton= function()
{
	console.log("clic del boton");
	//$(".anuncioWeb").html("Clic del boton")
	$(".anuncioWeb").append("Clic del boton");
}

//preparar los eventos 
//de todos mis objetos
//	º	$("#miBoton").on("click",clicBoton);

//main



var clicBoton2= function()
{
	
	$.ajax({
		beforeSend:function(){
console.log("Espere..");
	},
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data){
  console.log(data);
  //alert(data.results[0].name.first+data.results[0].name.last);
  //mostramos la informacion en html
$("#fotoPersona").attr("src",data.results[0].picture.medium);
$("#txtNombreUser").html("src",data.results[0].name.first);
$("#txtApellidoUser").html("src",data.results[0].name.last);

},
error: function(xhr,error,throws){
console.log("ocurrio un error");


  	
  }
});
     
}	

var clicBBoton2= function(tecla)
{
	if (tecla.which == 13)
	{
$("·#otroInput").focus();

	}
}
	$(".anuncioWeb").off("click",clicBoton2)
	$(".anuncioWeb").on("click",clicBoton2)
	$("#miBoton").on("click",clicBoton2)
	//$("#unInput").on("keypress",teclaUnInput);


//preparar los eventos 
//de todos mis objetos

}
$(document).on("ready",inicio);



