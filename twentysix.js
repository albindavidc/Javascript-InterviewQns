let my_string = prompt("Enter a 4 digit or higher number: ");  

try {
    reversed_string = my_string.split('').reverse().join(''); 
    console.log("Reversed string is :", reversed_string);
} catch (err) {
    console.log("Error :", err);
} finally {
    console.log("Type of my_string is :", typeof my_string);
}
