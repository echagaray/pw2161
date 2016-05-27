<?php 
//funciones
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";// ? y : son como if y else
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}


function cambios()
{
	$IdAlmacen = GetSQLValueString($_POST["txtidAlmacen"],"text");
	$Nombre   = GetSQLValueString($_POST["txtNombre"]),"text");
	$Direccion1    = GetSQLValueString($_POST["txtDireccion1"],"text");
	$Direccion2 = GetSQLValueString($_POST["txtDireccion2"],"text");
	$CP = GetSQLValueString($_POST["txtcp"],"long");
	$Localidad = GetSQLValueString($_POST["txtlocalidad"],"text");
	$Provincia	 = GetSQLValueString($_POST["txtprovincia"],"text");
	mysql_connect("localhost","root","");
	mysql_select_db("examen");
	
	$update = sprintf("update almacenes set IdAlmacen where IdAlmacen=%d",$IdAlmacen)
	mysql_query($update);
	if(mysql_affected_rows() > 0)
	{
		$respuesta = true;
	}

	$salidaJson = array('respuesta' => $respuesta);
	print json_encode($salidaJson);

}

function ConsultaAlmacen()
{
	$respuesta =  true;
	mysql_connect("localhost","root","");
	mysql_select_db("examen");
	$consulta = "select IdAlmacen from almacenes ";
	$resultado = mysql_query($consulta);
	$tabla = "";
	if(mysql_num_rows($resultado) > 0)
	{
		$respuesta = true;
		$tabla.= "<tr>";
		$tabla.= "<th>txtidAlmacen>th>";
		$tabla.= "<th>txtNombre</th>";
		$tabla.= "<th>txtDireccion1</th>";
		$tabla.= "<th>txtDireccion2</th>";
		$tabla.= "<th>txtcp</th>";
		$tabla.= "<th>txtlocalidad</th>";
		$tabla.= "<th>txtprovincia</th>";

		$tabla.= "</tr>";
		while ($registro = mysql_fetch_array($resultado))
		{
		$tabla.= "<tr>";
		$tabla.= "<th>txtidAlmacen>th>";
		$tabla.= "<th>txtNombre</th>";
		$tabla.= "<th>txtDireccion1</th>";
		$tabla.= "<th>txtDireccion2</th>";
		$tabla.= "<th>txtcp</th>";
		$tabla.= "<th>txtlocalidad</th>";
		$tabla.= "<th>txtprovincia</th>";
		$tabla.= "</tr>";
		}
	}
	$salidaJson = array('respuesta' => $respuesta,
						 'tabla'    => $tabla );
}

$accion = $_POST["accion"];
//menu principal
switch ($accion) {

				
				case 'cambios':
					consultaAlmacen();
					break;
					# code...
				case 'consultaAlmacen':
					cambios();
			
					break;
	
	default:
		# code...
		break;
}

 ?>