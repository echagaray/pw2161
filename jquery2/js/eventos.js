var iniciaApp = function()
{
	var validarEntrada = function()
	{
		//invalida los eventos que
		// no corresponden a  esta funcion
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		//Validaciones
		//1.- Que no sean vacíos
		if(usuario == "")
		{
			alert("El usuario no debe ser vacío");
			$("#txtUsuario").focus();
		}
		if(clave == "")
		{
			alert("La clave no debe ser vacía");
			$("#txtClave").focus();
		}






		//2.-verificar USUARIO Y PW
		var parametros="accion=validaEntrada"+
		"&usuario="+usuario+"&clave="+clave
		"&id="+Math.random();


		$.ajax({
			beforeSend:function(){
				console.log("validar al usuario")
			},

			cache:false,
			type:"POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if (response.respuesta==true)
				{
					alert("usuario registrado correctamente");
				}

				else
				{

					alert("usuario no registrado correctamente");
				}
			},

			error: function(xhr,ajax,throwError){

			}


				if (response.respuesta == true) //
				{
						$("datosUsuario").hide();
						$("nav").show("slow");
				}
				else
				{
					alert("usuario/contraseña incorrecto (s)");
				}

			},
			error:function(xhr,ajaxOptions,throwError){
				console.log("Algo salio mal :(");
			
			}
		}); 

//funciones
var Altas = function()
{
	//mostramos el formulario 

	$("#altaUsuarios").show("slow";)
}


var AltaUsuarios = function()
{
	event.preventDefault();

	//mostramos el formulario 
alert($("#frmAltaUsuarios").serialize());
var datos = $("#frmAltaUsuarios").serialize();
var parametros = "accion=guardaUsuarios&"+datos+ 
											"&id="+Math.random();
}

		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit",validarEntrada);
	$("#btnAltas").on("click",Altas);
	$("#btnAltaUsuario","click",AltaUsuarios);
}

$(document).on("ready",iniciaApp);
