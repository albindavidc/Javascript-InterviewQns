let word = prompt("Enter the word : ");

let reversedWord = word.split("").reverse().join("");

if(word===reversedWord){
    alert("Entered word "+word.toUpperCase()+ " is a palindrome");
}else{
    alert("Entered word "+word.toUpperCase()+" is not a palindrome.");
}