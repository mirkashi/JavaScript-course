//var c = 300
let a = 300
//{} curley bracket hee scope hai.yai jab kise function k sth yai  phr if else k sth ayta hai.
//problem khn ayti for example.

if (true) {  // acha ider jo b mai ny (if) maii likha hai yai hai pura  "block scope" yai jo baheer likhy gy wo hai global scope,
let a = 10 
const b = 20

console.log("INNER: ", a);
} // jo if mai likha hai wo hai block scope mai or jo bhaer wo hai global scope.

for(let i = 0; i < Array.length; i++ ){
    const element = array(i);


}


console.log(a);
//console.log(b);
//console.log(c);