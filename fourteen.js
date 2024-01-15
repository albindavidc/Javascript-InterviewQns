const size = Number(prompt("Enter the size of the array: "));

const array1 = [];
const array2 = [];

for (let i = 0; i < size; i++) {
  const row1 = [];
  for (let j = 0; j < size; j++) {
    row1.push(Number(prompt("Enter value " + (i + 1) + "," + (j + 1) + " of array1: "))); // Convert input directly to number
  }
  array1.push(row1);
}

for (let i = 0; i < size; i++) {
  const row2 = [];
  for (let j = 0; j < size; j++) {
    row2.push(Number(prompt("Enter value " + (i + 1) + "," + (j + 1) + " of array2: "))); // Convert input directly to number
  }
  array2.push(row2);
}

const sum = [];

for (let i = 0; i < size; i++) {
  const sumRow = [];
  for (let j = 0; j < size; j++) {
    sumRow.push(array1[i][j] + array2[i][j]);
  }
  sum.push(sumRow);
}

console.log("Sum of 2 arrays is:");
for (const row of sum) {
  console.log(row.join(" "));
}

console.log("Sum of the entered 2D array is:", sum);
