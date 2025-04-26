const digits = document.querySelector(".digits");
const operators = document.querySelector(".operators");
const display = document.querySelector(".display");
let number1, number2, operator;
let resultDisplayed = 0;
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
			if (b == 0) alert("Cannot divide by 0!");
			else {
				result = divide(a, b);
			}

			break;
	}
	if (!Number.isSafeInteger(result)) result = result.toFixed(2);
	display.innerText = result;
	resultDisplayed = 1;
	number2 = result;
	number1 = 0;
}

function clear() {
	number1 = 0;
	number2 = 0;
	operator = 0;
	display.innerText = "";
}

function digitClicked(e) {
	if (e.target.innerText == "C") {
		clear();
	} else if (e.target.innerText == "⌫") {
		number1 /= 10;
		display.innerText = display.innerText.slice(0, -1);
	} else if (resultDisplayed == 1) {
		clear();
		display.innerText = e.target.innerText;
	} else if (
		(e.target.innerText != "." && e.target.innerText != "⌫") ||
		(e.target.innerText == "." && !display.innerText.includes("."))
	) {
		display.innerText += e.target.innerText;
	}
	resultDisplayed = 0;
	number1 = Number(display.innerText);

	if (operator == "÷" && number2 && number1 == 0)
		alert("Cannot divide by 0!");
}

function operatorClicked(e) {
	display.innerText = "";
	resultDisplayed = 0;
	if (e.target.innerText != "=") {
		operator = e.target.innerText;
		if (!number2) {
			number2 = number1;
			number1 = 0;
		}
	} else if (number1 && number2 && operator) {
		operate(operator, number2, number1);
		operator = 0;
	}
}
