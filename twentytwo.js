let size = Number(prompt("Enter the size of the array: "));

function getArray() {
  let array1 = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      const value = Number(prompt(`Enter value ${i}, ${j} of the array: `));
      row.push(value);
    }
    array1.push(row);
  }
  return array1; 
}

function addArray(array1, array2) {
  const sumArray = [];
  for (let i = 0; i < array1.length; i++) {
    const row = [];
    for (let j = 0; j < array1[i].length; j++) {
      row.push(array1[i][j] + array2[i][j]); 
    }
    sumArray.push(row);
  }
  return sumArray;
}

function displayArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function main() {
  const array1 = getArray();
  const array2 = getArray();

  const sumArray = addArray(array1, array2);

  console.log("\nSum of arrays: ");
  displayArray(sumArray);
}

main();
