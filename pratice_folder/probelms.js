//Write a program that solves the following expression: 
//      AB
//-------------D
//     30C%100


let  a=25;
let b=20;
let c=35;
let d=75;

 
let result = (a * b * d) /(30 * c %100) ;

console.log(result);
 
// convert current date and time 
// like this 
// Example output: Current Date: 3 September 2025, 6:45 PM

//start

let asim = new Date()

let messi={
month:"long",
year:"numeric",
day:"numeric",
hour:"numeric",
minute:"numeric",
hour12:true
}

let mydate = asim.toLocaleString("en-GB",messi)
console.log(mydate);
