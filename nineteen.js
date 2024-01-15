let annualIncome = prompt("Enter your annual income: ");

if (annualIncome<250000){
    alert("Eureka!! You no need to pay tax.")
}else if(annualIncome>250000 || annualIncome<500000){
    alert(`You have to pay a tax amount of ${(annualIncome*5)/100} for ${annualIncome}`);
}else if(annualIncome>500000 || annualIncome<1000000){
    alert(`You have to pay ${(annualIncome*20)/100} for ${annualIncome}`);
}else if(annualIncome>1000000){
    alert(`You have to pay ${(annualIncome*30)/100} for ${annualIncome}`);
}