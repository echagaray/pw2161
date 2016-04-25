ar contador=1;

function seleccion(valor,pos)
{
if(valor=="")
{ 
if (contador%2 == 0)
{
document.getElementById(pos).value="X";
contador=contador+1;
}
else
{
document.getElementById(pos).value="O";
contador=contador+1;
}

if(contador>=5)
checar();
}
}

function checar()
{
if(contador>=5)
{
if((document.getElementById("s11").value==document.getElementById("s12").value)&&(document.getElementById("s11").value==document.getElementById("s13").value)&&(document.getElementById("s11").value!=""))
{
alert("El jugador "+document.getElementById("s11").value+" ha ganado.");
location.reload();
}


if((document.getElementById("s31").value==document.getElementById("s32").value)&&(document.getElementById("s31").value==document.getElementById("s33").value)&&(document.getElementById("s31").value!=""))
{
alert("El jugador "+document.getElementById("s31").value+" ha ganado.");
location.reload();
}

if((document.getElementById("s11").value==document.getElementById("s21").value)&&(document.getElementById("s11").value==document.getElementById("s31").value)&&(document.getElementById("s11").value!=""))
{
alert("El jugador "+document.getElementById("s11").value+" ha ganado.");
location.reload();
}


if(((document.getElementById("s12").value==document.getElementById("s22").value)&&(document.getElementById("s12").value==document.getElementById("s32").value)&&(document.getElementById("s12").value!=""))&&((document.getElementById("s21").value==document.getElementById("s22").value)&&(document.getElementById("s21").value==document.getElementById("s23").value)&&(document.getElementById("s21").value!="")))
{
contador--;
alert("El jugador "+document.getElementById("s21").value+" ha ganado.");
location.reload();
}
else
{
if((document.getElementById("s12").value==document.getElementById("s22").value)&&(document.getElementById("s12").value==document.getElementById("s32").value)&&(document.getElementById("s12").value!=""))
{
alert("El jugador "+document.getElementById("s12").value+" ha ganado.");
location.reload();
}
else
{
if((document.getElementById("s21").value==document.getElementById("s22").value)&&(document.getElementById("s21").value==document.getElementById("s23").value)&&(document.getElementById("s21").value!=""))
{
alert("El jugador "+document.getElementById("s21").value+" ha ganado.");
location.reload();
}
}
}


if((document.getElementById("s13").value==document.getElementById("s23").value)&&(document.getElementById("s13").value==document.getElementById("s33").value)&&(document.getElementById("s13").value!=""))
{
alert("El jugador "+document.getElementById("s13").value+" ha ganado.");
location.reload();
}


if(((document.getElementById("s11").value==document.getElementById("s22").value)&&(document.getElementById("s11").value==document.getElementById("s33").value)&&(document.getElementById("s11").value!=""))&&((document.getElementById("s13").value==document.getElementById("s22").value)&&(document.getElementById("s13").value==document.getElementById("s31").value)&&(document.getElementById("s13").value!="")))
{
contador--;
alert("El jugador "+document.getElementById("s13").value+" ha ganado.");
location.reload();
}
else
{
if((document.getElementById("s11").value==document.getElementById("s22").value)&&(document.getElementById("s11").value==document.getElementById("s33").value)&&(document.getElementById("s11").value!=""))
{
alert("El jugador "+document.getElementById("s11").value+" ha ganado.");
location.reload();
}
else
{
if((document.getElementById("s13").value==document.getElementById("s22").value)&&(document.getElementById("s13").value==document.getElementById("s31").value)&&(document.getElementById("s13").value!=""))
{
alert("El jugador "+document.getElementById("s13").value+" ha ganado.");
location.reload();
}
}
}

}
if(contador==10)
{

alert("EMPATEE!!");
location.reload();
}
}