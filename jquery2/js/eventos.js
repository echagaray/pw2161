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
	}


//funciones
var Altas = function()
{
	//mostramos el formulario 

	$("#altaUsuarios").show("slow");
	$("#altaUsuarios h2").html("Alta de Usuarios");
	//apago la funcion de AltaUsuario
$("#frmAltaUsuarios").on("submit",AltaUsuario);
//encendiendo la funcion de BajaUsuario para el mismo boton
$("#frmAltaUsuarios").off("submit",BajaUsuario);
}

var Bajas function(){
	$("#altaUsuarios").show("slow");
$("#altaUsuarios h2").html("Baja Usuarios");
//apago la funcion de AltaUsuario
$("#frmAltaUsuarios").off("submit",AltaUsuario);
//encendiendo la funcion de BajaUsuario para el mismo boton
$("#frmAltaUsuarios").on("submit",BajaUsuario);

}


var BajaUsuario = function()
{
	event.preventDefault();

//mostramos el formulario 
//alert($("#frmAltaUsuarios").serialize());
var datos = "txtNombreUsuario="+$("#txtNombreUsuario").val();
var parametros = "accion=bajaUsuario&"+datos+ 
											"&id="+Math.random();


$.ajax({
			beforeSend:function(){
				console.log("-baja al usuario")
			},

			cache:false,
			type:"POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
			

				if (response.respuesta == true) //
				{
					alert("usuario dado de baja correctamente");	
				}
				else
				{
					alert("usuario no se pudo dar de baja correctamente");
				}

			},
			error:function(xhr,ajaxOptions,throwError){
				console.log("Algo salio mal :(");	
			
			}
		}); 
	}												
}


var AltaUsuarios = function()
{
	event.preventDefault();

	//mostramos el formulario 
//alert($("#frmAltaUsuarios").serialize());
var datos = $("#frmAltaUsuarios").serialize();
var parametros = "accion=guardaUsuarios&"+datos+ 
											"&id="+Math.random();
}

		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit",validarEntrada);
	$("#btnAltas").on("click",Altas);
	$("#btnAltaUsuario").on"submit",AltaUsuarios);
	$("#btnBajas","click",Bajas);
}

$(document).on("ready",iniciaApp);
