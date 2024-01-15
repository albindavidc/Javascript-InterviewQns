const size = Number(prompt("Enter the size of the array: "));

function getArray() {
  const array1 = [];

  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      const value = Number(prompt(`Enter the vaue ${i}, ${j} to array 1 : `));
      row.push(value);
    }
    array1.push(row);
  }
  return array1;
}

function displayArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function main() {
  const arrayMain = getArray();
  displayArray(arrayMain);
}

main();
