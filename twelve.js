const size = parseInt(prompt("Enter the size of array : "));

let array = [];

for (let i = 0; i < size; i++) {
  array.push(parseInt(prompt("Enter value " + (i + 1) + " of the array :")));
}

alert(
  "Entered size : " +
    size +
    "\n" +
    "Entered Array : " +
    array.join(", ") +
    "\n" +
    "Entered array in decending order : " +
    array.sort((a, b) => b - a)
);
