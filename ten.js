const size = parseInt(prompt("Enter the size of the array: "));

let array1 = [];
let array2 = [];

for (let i = 1; i <= size; i++) {
  array1.push(prompt("Enter the " + i + " of array1: "));
}

for (let i = 1; i <= size; i++) {
  array2.push(prompt("Enter the " + i + " of array2: "));
}

let temp;
temp = array1;
array1 = array2;
array2 = temp;

let alert1 = "Array1 : " + array1;
let alert2 = "Array2 : " + array2;

alert(alert1 + "\n" + alert2);
