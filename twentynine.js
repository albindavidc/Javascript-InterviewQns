function myFilter(myArray, callback) {
  let filteredSum = myArray.reduce((sum, currentValue) => {
    if (callback(currentValue)) {
      return sum + currentValue;
    } else {
      return sum;
    }
  }, 0);

  return filteredSum;
}

let size = Number(prompt("Enter the size of the array: "));
let myArray = [];

for (let i = 0; i < size; i++) {
  let value = Number(prompt(`Enter value ${i + 1} to array 1: `));
  myArray.push(value);
}

const sum = myFilter(myArray, (num) => true);

console.log("The sum of the array elements is: ", sum);
