let num = Number(prompt("Enter a number : "));
function checkPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num < 4) {
    return true;
  }
  for (i = 2; i * i <= num; i++);
  if (num % 2 === 0) {
    return false;
  }
  return true;
}

if (checkPrime(num)) {
  alert(`The number you have entered ${num} is a prime number.`);
}else {
  alert(`The number you have entered ${num} is not a prime number`);
}

