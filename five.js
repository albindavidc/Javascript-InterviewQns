var num = prompt("Enter a number : ");
if(num<50){
    alert("You have failed the exam with "+num+" marks");
}else if(num>=50 && num<60){
    alert("You got E grade in your exam with "+num+" marks");
}else if(num>=60 && num<70){
    alert("You got D grade in your exam with "+num+" marks");
}else if(num>=70 && num<80){
    alert("You got C grade in your exam with "+num+" marks");
}else if(num>=80 && num<90){
    alert("You got B grade in your exam with "+num+" marks");
}else if(num>=90 && num<100){
    alert("You got A grade in your exam with "+num+" marks");
}else{
    alert("You have entered invalid marks");
}