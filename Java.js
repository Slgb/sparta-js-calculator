var which_calculator = prompt("Which calculator would you like to use? 'a' for Basic 'b' for Advanced");
var firstNum = parseInt(prompt("Please type in your first Number"));
var operator = prompt(" Please pick an operator - (a for addition) (s for subtraction) (m for multiplication) (d for division) ");
var secondNum = parseInt(prompt("Please type in your second Number"));

if (which_calculator == "a") {
		alert("You have picked the basic calculator");

} else {

	alert("You have picked the Advanced calculator");
}






if (operator == "a") {
	alert((firstNum) + (secondNum));

} else if (operator == "s") {
	alert((firstNum) - (secondNum));

} else if (operator == "m") {
	alert((firstNum) * (secondNum));

} else if (operator == "d") {
	alert((firstNum) / (secondNum));
}



/*switch (operator){

	case
	parseInt((firstNum)+(secondNum));
	break;

	case
	parseInt((firstNum)-(secondNum));
}*/