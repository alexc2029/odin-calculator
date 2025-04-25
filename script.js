const digits = document.querySelector(".digits");
const operators = document.querySelector(".operators");
const display = document.querySelector(".display");
let number1, number2, operator;
digits.addEventListener("click", digitClicked);
operators.addEventListener("click", operatorClicked);

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(op, a, b) {
	let result;
	console.log(a);
	console.log(op);
	console.log(b);
	switch (op) {
		case "+":
			result = add(a, b);
			break;
		case "-":
			result = subtract(a, b);
			break;
		case "×":
			result = multiply(a, b);
			break;
		case "÷":
			result = divide(a, b);
			break;
	}
	display.innerText = result;
}

function digitClicked(e) {
	display.innerText += e.target.innerText;
	number1 = Number(display.innerText);
}

function operatorClicked(e) {
	display.innerText = "";
	if (e.target.innerText != "=") {
		operator = e.target.innerText;
		number2 = number1;
		number1 = 0;
	} else operate(operator, number2, number1);
}
