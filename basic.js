//Write a program to take marks as input and display the grade
// let a=parseInt(prompt("Enter marks:"));
// if(a>=90 && a<=100)
// {
//     console.log("Grade is A+");
// }
// else if(a>=80 && a<=89)
// {
//     console.log("Grade is A");
// }
// else if(a>=70 && a<=79)
// {
//     console.log("Grade is B");
// }
// else if(a>=60 && a<=69)
// {
//     console.log("Grade is C");
// }
// else if(a>=50 && a<=59)
// {
//     console.log("Grade is D");
// }
// else{
//     console.log("Fail");
// }

//Write a program that takes the number of electricity units consumed and calculates the bill 
// let b=parseInt(prompt("Enter Units:"));
// if(b<=100)
// {
//     let ans=b*5;
//     ans+=50;
//     let res=`Bill is = ${ans}`
//     console.log(res);
// }
// else if(b>100 && b<=300)
// {
//     let ans=b*7;
//     ans+=50;
//     let res=`Bill is =${ans}`
//     console.log(res);
// }
// else{
//     let ans=b*10;
//     ans+=50;
//     let res=`Bill is =${ans}`
//     console.log(res);
// }

//Write a program to calculate Simple Interest 
// let p=parseInt(prompt("Enter Principle amount:"));
// let r=parseInt(prompt("Enter Rate amount:"));
// let n=parseInt(prompt("Enter Time (in year):"));
// let si=p*r*n/100;
// let res1=`Simple Interest is=${si}`
// console.log(res1);

//Write a program to calculate Net Salary of an employee after deducting tax
// let sal = parseInt(prompt("Enter Salary:"));
// if (sal <= 50000) {
//     console.log("Don't take any type of Tax");
// }
// else if (sal > 50000 && sal <= 100000) {
//     let tax = sal / 10;
//     let res2 = `Tax is=${tax}`
//     console.log(res2);
//     let cut = sal - tax;
//     let res3 = `After cut Tax Salary is=${cut}`
//     console.log(res3);
// }
// else {
//     let tax = sal / 20;
//     let res2 = `Tax is=${tax}`
//     console.log(res2);
//     let cut = sal - tax;
//     let res3 = `After cut Tax Salary is=${cut}`
//     console.log(res3);
// }

// Check number is even or odd 
// let num=parseInt(prompt("Enter a number:"));
// if(num%2==0)
// {
//     let num1=`${num} number is even`
//     console.log(num1);
// }
// else
// {
//     let num1=`${num} number is odd`
//     console.log(num1);
// }

//write a program of find vowels
// let ch=prompt("Enter a character:");
// if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u")
// {
//     let ch1=`${ch} is vowel`
//     console.log(ch1);

// }
// else
// {
//     let ch1=`${ch} is not vowel`
//     console.log(ch1);
// }

//minimum number find
// let x = parseInt(prompt("Enter first number:"));
// let y = parseInt(prompt("Enter second number:"));
// let z = parseInt(prompt("Enter third number:"));

// if (x < y && x < z) {
//     console.log("x is min");
// }
// else if (y < x && y < z) {
//     console.log("y is min");
// }
// else {
//     console.log("z is min");
// }

//swap value
// let s=10;
// let e=12;
// let r;
// let res4=`Before swaping values s=${s} and e=${e}`
// console.log(res4);

// //s=s+e;
// //e=s-e;
// //s=s-e;

// r=s;
// s=e;
// e=r;

// let res5=`After swaping values s=${s} and e=${e}`
// console.log(res5);

//switch case
// let char=prompt("Enter a character:");
// switch(char)
// {
//     case 'a':
//         console.log("This is vowels");
//         break;
//     case 'e':
//         console.log("This is vowels");
//         break;
//     case 'i':
//         console.log("This is vowels");
//         break;
//     case 'o':
//         console.log("This is vowels");
//         break;
//     case 'u':
//         console.log("This is vowels");
//         break;
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U':
//             console.log("This is vowels");
//             break;
//     default:
//         console.log("This is not vowel");
        
// }

// let a=document.getElementById("btn");
// console.log(a);
// let b=document.getElementsByClassName("pa")
// console.log(b);
// let c=document.getElementsByTagName("h1")
// console.log(c);
// let d=document.querySelectorAll(".pa")
// console.log(d);

//find factor of number
let a=parseInt(prompt("Enter number:"));
for(let i=1;i<=a;i++)
{
    if(a%i==0){
        let r1=`Factor of number ${i}` 
        console.log(r1);
    }
}

//find factorial of number
let b=parseInt(prompt("Enter number:"));
let pre=1;
for(let j=1;j<=b;j++)
{
    pre=pre*j;
}
console.log(pre);

//find sum of all digit
let c=parseInt(prompt("Enter number:"));
let sum=0;
while(c!==0)
{
    let last=c%10;
    sum+=last;
    c=Math.floor(c/10);
}
console.log(sum);

//find first and last digit sum
let d=Number(prompt("Enter number:"));
let last1=d%10;
let e=d;
while(e>=10)
{
    e=Math.floor(e/=10);
    
}
let first=e;
sum=first+last1;
console.log(sum);

//print table

let s=Number(prompt("Enter number:"));

for(let i=1;i<=10;i++)
{
    let ans=d=s*i;
    let r=`${s}*${i}=${ans}`
    console.log(r);
}

