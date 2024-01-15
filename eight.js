const num = parseInt(prompt("Enter a number to get the sum of odd numbers : "));

function sumOfOdd() {
  let sum = 0;
  for (let i = 1; i <= num; i += 2) {
    if (i / 2 != 0) {
      sum += i;
    }
  }
  return sum;
}

alert("Sum of odd numbers till " + num + " is " + sumOfOdd());