//Write a program to take marks as input and display the grade
let a=prompt("Enter marks:");
if(a>=90 && a<=100)
{
    console.log("Grade is A+");
}
else if(a>=80 && a<=89)
{
    console.log("Grade is A");
}
else if(a>=70 && a<=79)
{
    console.log("Grade is B");
}
else if(a>=60 && a<=69)
{
    console.log("Grade is C");
}
else if(a>=50 && a<=59)
{
    console.log("Grade is D");
}
else{
    console.log("Fail");
}

// Write a program that takes the number of electricity units consumed and calculates the bill 
let b=prompt("Enter Units:");
if(b<=100)
{
    let ans=b*5;
    ans+=50;
    let res=`Bill is = ${ans}`
    console.log(res);
}
else if(b>100 && b<=300)
{
    let ans=b*7;
    ans+=50;
    let res=`Bill is =${ans}`
    console.log(res);
}
else{
    let ans=b*10;
    ans+=50;
    let res=`Bill is =${ans}`
    console.log(res);
}

// Write a program to calculate Simple Interest 
let p=prompt("Enter Principle amount:");
let r=prompt("Enter Rate amount:");
let n=prompt("Enter Time (in year):");
let si=p*r*n/100;
let res1=`Simple Interest is=${si}`
console.log(res1);

//Write a program to calculate Net Salary of an employee after deducting tax
let sal = prompt("Enter Salary:");
if (sal <= 50000) {
    console.log("Don't take any type of Tax");

}
else if (sal > 50000 && sal <= 100000) {
    let tax = sal / 10;
    let res2 = `Tax is=${tax}`
    console.log(res2);
    let cut = sal - tax;
    let res3 = `After cut Tax Salary is=${cut}`
    console.log(res3);
}
else {
    let tax = sal / 20;
    let res2 = `Tax is=${tax}`
    console.log(res2);
    let cut = sal - tax;
    let res3 = `After cut Tax Salary is=${cut}`
    console.log(res3);
}

// Check number is even or odd 
let num=prompt("Enter a number:");
if(num%2==0)
{
    let num1=`${num} number is even`
    console.log(num1);
}
else
{
    let num1=`${num} number is odd`
    console.log(num1);
}

//write a program of find vowels
let ch=prompt("Enter a character:");
if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u")
{
    let ch1=`${ch} is vowel`
    console.log(ch1);
    
}
else
{
    let ch1=`${ch} is not vowel`
    console.log(ch1);
}