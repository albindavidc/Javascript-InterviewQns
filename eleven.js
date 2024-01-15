const size = parseInt(prompt("Enter the size of the array: "));

let array = [];

for (let i = 0; i < size; i++) {
  array.push(parseInt(prompt("Enter " + (i + 1) + "value to the array : ")));
}
let evenSum = 0;

for (let j = 0; j < size; j++) {
  if (array[j] % 2 === 0) {
    evenSum++;
  }
}

alert("Entered size : " + size + "\n"+ "Entred Array : " + array.join(", ") + 
"\n"+ "Sum of even numbers in which you have entered is : " + evenSum);