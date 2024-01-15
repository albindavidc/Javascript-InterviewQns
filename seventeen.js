let operator = prompt("Enter operator from given (+,-,/,*): ");

let firstNumber = Number(prompt("Enter the first number: "));
let secondNumber = Number(prompt("Enter the second number: "));
let result;

class Calculator {
  constructor() {}
  addition() {
    alert(
      `Sum of the ${firstNumber} & ${secondNumber} is ${
        firstNumber + secondNumber
      }`
    );
  }

  substraction() {
    alert(
      `Difference of the ${firstNumber} & ${secondNumber} is ${
        firstNumber - secondNumber
      }`
    );
  }

  multiplication() {
    alert(
      `Product of the ${firstNumber} & ${secondNumber} is ${
        firstNumber * secondNumber
      }`
    );
  }

  division() {
    if (secondNumber === 0) {
      alert("Cannot divide by zero");
    } else {
      alert(
        `Division of the ${firstNumber} & ${secondNumber} is ${
          firstNumber / secondNumber
        }`
      );
    }
  }
}

const calculator = new Calculator();

switch (operator) {
  case "+":
    calculator.addition();
    break;
  case "-":
    calculator.substraction();
    break;
  case "/":
    calculator.division();
    break;
  case "*":
    calculator.multiplication();
    break;
  default:
    result = "You have entered invalid operator.";
}
