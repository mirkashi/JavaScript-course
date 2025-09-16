
function meranaam(){

console.log("K");
console.log("a");
console.log("s");
console.log("h");
console.log("i");
console.log("f");

}

//meranaam()


// function addtwonumber(num1,num2){  //(num1,num2) is ko parameter bolty hai.

//    console.log(num1 + num2);
// }

function addtwonumber(num1,num2){  //(num1,num2) is ko parameter bolty hai.
//let result = num1 +num2 //let result = num1 +num2 is elwa eik direct method b hai
return num1 + num2
//return result
//console.log("kashi") return k byd koi value nahi kam krti
}
const result = addtwonumber(4, 6);

//console.log("Result: ",result);

function loginman(username){
if(!username){
   console.log("please enter a username");
}
return `${username} just logged in`
}
//console.log(loginman("messi"))
console.log(loginman())