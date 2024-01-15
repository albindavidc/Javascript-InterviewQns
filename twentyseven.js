let my_height = prompt("Enter your height: ");

try {
  if (isNaN(my_height)) {
    throw new Error("NotANumberError");
  }
  const height = Number(my_height);

  if (height > 75) {
    throw new Error("HugeHighError");
  } else if (height < 4) {
    throw new Error("TinyHightError");
  } else {
    console.log(`Your height is : ${height}`);
  }
} catch (err) {
  console.log(err.message);
}
