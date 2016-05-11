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

		if (usuario=="pw" && clave=="1234") {
			$("#txtClave").focus();

			alert("BIENVENIDO: " +usuario);
			$("#datosUsuario").hide(); //escondemos
			$("nav").show();//mostramos

		}
		else
			alert("usuario/contraseña incorrecta ");


		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit",validarEntrada);
}
$(document).on("ready",iniciaApp);
