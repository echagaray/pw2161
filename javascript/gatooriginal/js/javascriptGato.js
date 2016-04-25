var turno =false;
var letraCasilla="";
var cuentaJuego=0;
var cuentaJugadas=0;

function iniciaGato()
{

	//En construccion
}

validaJuegada(letra){
	var ganador = false;
	var b11=document.getElementById("unouno").innerHTML;
	var b12=document.getElementById("unodos").innerHTML;
	var b13=document.getElementById("unotres").innerHTML;
	var b21=document.getElementById("dosuno").innerHTML;
	var b22=document.getElementById("dosdos").innerHTML;
	var b23=document.getElementById("dostres").innerHTML;
	var b31=document.getElementById("tresuno").innerHTML;
	var b32=document.getElementById("tredos").innerHTML;
	var b33=document.getElementById("trestres").innerHTML;

	//jugadas
	//renglones
	if (b11==b12 &&b12==b13 && b11!="&nbsp;") 
ganador=true;

	if (b21==b22 &&b22==b23 && b21!="&nbsp;") 
ganador=true;


	if (b31==b32 &&b32==b13 && b31!="&nbsp;") 
ganador=true;


	//columnas
if (b11==b12 &&b12==b13 && b11!="&nbsp;") 
ganador=true;

	if (b21==b22 &&b22==b23 && b21!="&nbsp;") 
ganador=true;


	if (b31==b32 &&b32==b13 && b31!="&nbsp;") 
ganador=true;


//diagonales
if (b11==b22 &&b120==b13 && b11!="&nbsp;") 
ganador=true;

	if (b21==b22 &&b22==b23 && b21!="&nbsp;") 
ganador=true;


	if (b31==b32 &&b32==b13 && b31!="&nbsp;") 
ganador=true;
if (ganador==true) //if ganador {};
alert("Ganador "+letra+"!")

else if (ganador==false) {};
alert("Empate");
}

function escribe(casilla){

var letra="";
letraCasilla=document.getElementById(casilla).innerHTML;
if (letraCasilla !="X" && letraCasilla !="O")
{
if (turno==false) 
	letra="X";
else
	letra="O";
document.getElementById(casilla).innerHTML=letra;
turno=!turno; //turno es igual a verdadero

cuentaJugadas=cuentaJugadas + 1;
//Para saber quein
validaJuegada(letra);


}