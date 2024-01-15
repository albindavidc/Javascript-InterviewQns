function pattern() {
  let numStart = 1;
  for (let i = 1; i <= 4; i++) {
    let patternRow = "";
    for (let j = 1; j <= i; j++) {
      patternRow += numStart++ + " ";
    }
    console.log(patternRow);
  }
}
pattern();
