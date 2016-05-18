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
  $respuesta=true;
	$usuario= GetSQLValueString($_POST["usuario"],"text");
	$clave =GetSQLValueString(md5($_POST["clave"]),"text");


//conecto ql servidor de bd
//servidor, usuario, clave
$conexion = mysql_connect("localhost","root","");
//selecionar la bd

mysql_select_db("usuarios");
$validar= sprintf("select usuario,clave from usuarios where usuario=%s  and clave=%s limit 1",$usuario,$clave);

$resultado =mysql_query($validar);
//rpeguntamos si se trajo un registro
if(mysql_num_rows($resultado )>0)
  $respuesta = true;

$salidaJSON = array('respuesta' => $respuesta);
//devooldemos el resultado al JS
print json_encode($salidaJSON);


}

function guardaUsuario()
{
  $usuario = GetSQLValueString($_POST["txtNombreUsuario"],"text");
   $clave = GetSQLValueString($_POST["txtClaveUsuario"],"text");
   $tipo = GetSQLValueString($_POST["txtTipoUsuario"],"text");
   $depto = GetSQLValueString($_POST["txtDepartamento"],"long");

   $respuesta= false;
   //conecto ql servidor de bd
//servidor, usuario, clave
$conexion = mysql_connect("localhost","root","");
//selecionar la bd

mysql_select_db("usuarios");
   //conecta ak servidor bd
$validar= sprintf("insert into usuarios values(%s,%s,%s,%d)",$usuario,$clave),$tipo,$departamento;
//ejecutamos la consulta

mysql_query($guarda);
//cuantos registros fueron afectados

if (mysql_affected_rows()>0) {

$respuesta=true;

}
$salidaJSON= $array ('respuesta' => ,$respuesta );
print json_encode($salidaJSON);


//menu principal


switch ($accion) {
	case 'validaEntrada':
		# code...
	validaEntrada();
		break;
	case 'guardaUsuario':
  guardaUsuario();
    break;
	default:
		# code...
		break;
}
