var display = 0;
var previous;
var current;
var preopr;
var result;
var num1;
var num2;
var multioper = false;	

function initialize(){
	previous = 0;
	current = 0;
	preopr = "+";
	result = 0;
	num1 = 0;
	num2 = 0;
	multioper = false;	
}

initialize();

document.getElementById("display").innerHTML = display;

function getnumber(num){
	if (preopr == "="){
		initialize();
	}
	document.getElementById("error").innerHTML = "";
	previous = current;
	current = parseInt(num)+parseInt(previous)*10;
	display = current;
	document.getElementById("display").innerHTML = display;
	multioper = false;
}

function operation(opr){
	if (multioper == false){
		if (display == 0 && opr == '-'){
			preopr = '-';		
		}else if (num1 == 0 && preopr == '/'){
			preopr = '/';	
		}else if (num1 == 0 && preopr != '-'){
			num1 = display;
		}else{
			num2 = display;
		}
		document.getElementById("error").innerHTML = "";
		result = compute(num1, num2, preopr);
		preopr = opr;
		previous = 0;
		current = 0;
		num1 = result;
		num2 = 0;
		display = result;
		document.getElementById("display").innerHTML = display;
	}else{
		preopr = opr;
	}
	multioper = true;
}

function compute(num1, num2, preopr){
	switch(preopr){	
	case "+":
		result = num1 + num2;
		break;
	case "-":
		result = num1 - num2;
		break;
	case "*":
		result = num1 * num2;
		break;
	case "/":	
		if (num2 != 0){
		result = Math.floor(num1 / num2);
		break;
		}else if (num1!= 0 && num2 == 0){
			message = "num1:"+num1+"num2:"+num2;
			alert(message);
			document.getElementById("error").innerHTML = "Error! Cannot divide by 0!";
			result = 0;
			break;
		}
	case "=":
		break;	
	}
	return result;
}
