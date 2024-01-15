let num = prompt("Enter a number which is less than 100 to create its multiplication table: ");

function multi() {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += i + "x" + num + " = " + (i * num) + "\n";
  }
  return table;
}

let result = "Multiplication table of " + num + " is:\n";

alert(result + multi());