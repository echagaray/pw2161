<?php
$accion = $_POST["accion"];
//funciones

function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
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

function validaEntrada()
{
	$usuario= GetSQLValueString($_POST["usuario"],"text");
	$clave =GetSQLValueString(md5($_POST["clave"]),"text");
}

//conecto ql servidor de bd
//servidor, usuario, clave
$conexion = mysql_connect("127.0.0.0","root","")
//selecionar la bd

mysql_select_db("cursopw");
$validar= sprintf("select usuario,clave from usuario where usuario=%s  and clave=%s limit 1",$usuario,$clave);

$resultado =mysql_query($validar);
//rpeguntamos si se trajo un registro
if(mysql_num_rows($resultado )>0)

	



//menu principal


switch ($accion) {
	case 'validaEntrada':
		# code...
	validaEntrada();
		break;
	
	default:
		# code...
		break;
}
?>