function pattern() {
  let patternString = "";
  let i, j;
  for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
    patternString += j;
    } patternString += "\n";
  }
  return patternString;;
}

alert(pattern());
