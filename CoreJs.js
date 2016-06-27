/*Se encapsulan todas las funciones en un solo archivo Javascript*/
/*20 Clase Date
Se puede llamar de varias maneras
myDate= new Date();
myDate= new Date(2016, 06, 23) //Year, month, day
myDate= new Date(2016, 06, 23, 5, 15, 00) //Year, month, day, hour, minute, second
*/
function getTodaysDate(){
	fecha= new Date();
	var diaHoy=fecha.getDate();
	var mesHoy=fecha.getMonth()+1;
	var anioHoy=fecha.getFullYear();

	fechaCompleta={dia:diaHoy,fecha:mesHoy,anio:anioHoy};

	return fechaCompleta;
}

function showRequestPartDate(type){
	var date=getTodaysDate();
	switch(type){
		case "date":alert(date.dia);
			break;
		case "month": alert(date.fecha);
			break;
		default: alert(date.anio);
	}
}

function showQuarterYear(){
var month = document.getElementsByName('txtMes')[0].value;
	if(month <= 3)
	{
		alert("Primer cuatrimestre");
	}
	else if(month<=6)
	{
		alert("Segundo cuatrimestre");
	}
	else if(month<=9){
		alert("Tercer cuatrimestre");
	}
	else if(month<=12){
		alert("Cuarto cuatrimestre");
	}


}
/*22 Clase Math*/

function calcPower(){
	var base = document.getElementsByName('txtBase')[0].value;
	var exponent = document.getElementsByName('txtExponent')[0].value;
	
	var result=Math.pow(parseInt(base),parseInt(exponent)); //Math.pow
	setResult(result,'txtPowerResult');
}

function setResult(resultado,textBox){
	document.getElementById(textBox).value = resultado.toString();
}

function calcSqrt(){
	var number = document.getElementsByName('txtNumber')[0].value;
	var result = Math.sqrt(parseInt(number)); //Math.sqrt
	setResult(result,'txtResultadoRaiz');
}

/*23 Clase String*/
function searchCustomText(){
	var sourceString = document.getElementsByName('txtSourceString')[0].value;
	var searchString = document.getElementsByName('txtSearchString')[0].value;
	document.getElementById('paragraph').InnerHtml=sourceString;
	var sourceFound= sourceString.indexOf(searchString);

	if(sourceFound==-1){
		alert('Cadena no encontrada');
	}
	else{
		alert('Cadena encontrada')
	}

}

function checkIfPalindrome(){
	var palindromeString = getTextfromInput('txtpalindromo');
	var i;
	var stringArray= new Array();
	
	for(i=0;i<palindromeString.length;i++)
	{
		stringArray[i]=palindromeString.charAt(i);
	}

	var reverseString=stringArray.reverse().join(""); //The arguments defines the separator between elements in th string
	
	if(palindromeString==reverseString){
		alert("Es un palindromo");
	}
	else
	{
		alert ("no es un palindromo");
	}
}

//GeneralFunctions
function getTextfromInput(textboxName){
	try
	{
		return document.getElementsByName(textboxName)[0].value;	
	}
	catch(e)
	{
		alert(e);
		console.log(e);
	}
}