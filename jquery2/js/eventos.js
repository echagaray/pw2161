var iniciaApp = function()
{


	var cambios = function()
	{
		$("#cambiosAlmacen").show("slow");
		var parametros = "accion=consultas"+
						 "&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Cambios de  almacen");
				},
				cache: true,
				type: "POST",
				dataType: "json",
				url:"php/funciones.php",
				data: parametros,
				success: function(response){
					if(response.respuesta ==true)
					{
						$("#cambiosAlmacen").html(response.tabla);//limpiamos la tabla
					}
					else
					{
						alert("No se pudo Consultar");
					}
				},
				error:function(xhr,ajax,thrownError){
					console.log("Ha ocurrido un error");
			    }
		});

	}	

	//$("#frmValidaEntrada").on("submit",validarEntrada);
		
	$("#btnCambios").on("click",cambios);
}
$(document).on("ready",iniciaApp);
