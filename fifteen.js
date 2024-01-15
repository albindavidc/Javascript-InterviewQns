function getArray() {
  const size = Number(parseInt(prompt("Enter the size of the array: ")));
  const array1 = [];
  for (i = 0; i < size; i++) {
    const value = Number(prompt("Enter value " + (i + 1) + " of the array : "));
    array1.push(value);
  }
  return array1;
}

function displayArray(array1) {
  alert("Entered numbers are : " + array1.join(", "));
}

function main() {
  const myArray = getArray();
  displayArray(myArray);
}

main();