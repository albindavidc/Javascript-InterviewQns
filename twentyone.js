const size = Number(prompt("Enter the size of array: "));

let array1 = [];
let array2 = [];

for (let i = 0; i < size; i++) {
  array1.push(Number(prompt(`Enter number ${i + 1} of Array 1: `)));
}

function addAdjacent() {
  for (let i = 0; i < size - 1; i++) {
    array2.push(array1[i] * array1[i + 1]);
  }
  return array2;
}

const result = addAdjacent();
console.log(array1);
console.log(`Adjacent sum of the array is ${result}`);
