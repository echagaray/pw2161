//variable global
var operador ="";

function igual();
{
var valor1=document.calculadora.operando1.value;
var valor2=document.calculadora.operando2.value;
document.calculadora.resultado.value=eval(operando1+operador+operando2)

switch(num)
{

case +:
operando1+operando2;
break;
}

case -:
operando1-operando2;
break;
}

case /:
operando1/operando2;
break;
}

}

function numeros(num)
{
	//Escribir en el operando1
	var valor=document.calculadora
	if (=="") //vaciamos la caja

	{
		if (valor=="0")	//concatenar los valores de num con los del operando1
			document.calculadora.operando1.value =
			document.calculadora.operando1.value + num;
		
		else {
			if (valor=="0")	//concatenar los valores de num con los del operando1
			document.calculadora.operando2.value =
			document.calculadora.operando2value + num;
		}
			
	}


}

function operadores(ope)
{
	operador=ope;
}

function borrar()
{
	operador="";
	document.calculadora.operando1.value=0;
	document.calculadora.operando2.value=0;
	document.calculadora.resultado.value=0;

}