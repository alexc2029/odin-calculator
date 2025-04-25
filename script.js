let a, b, op;

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
		case "*":
			result = multiply(a, b);
			break;
		case "/":
			result = divide(a, b);
			break;
	}
	return result;
}

function digitClicked(e) {
	display.innerText += e.target.innerText;
	number = Number(display.innerText);
	console.log(number);
}

const digits = document.querySelector(".digits");
const display = document.querySelector(".display");
let number;
digits.addEventListener("click", digitClicked);
