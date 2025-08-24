//primitive

//7 types : string , call by value.
//number, boolearn, null, nudefined, symbol , BigInt

//this is primitive data types.

const score = 1000

const scoreValue = 100.2


const isLoggedIn = false
const outsidetemp= null
let userEmail;

const id = Symbol ('123')

const anotherid =Symbol('123')

console.log(id === anotherid);


//const bignum = 249484899494994949949n


//reference(non primitive)

//array, objects, functions

const heros = ["Messi","ronaldo","neymar"]
let myobj=
{
    name:"kashi",
    age:23
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof anotherid);

//Table 20 — typeof Operator Results

//Type of val	Result
//Undefined	 "undefined"
//Null	     "object"
//Boolean	     "boolean"
//Number	     "number"
//String	     "string"
//Object (native and does not implement [[Call]])	"object"
//Object (native or host and does implement [[Call]])	"function"
//Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".

//http://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++++

//stack (primitive), Heap(Non-primitive)

let Footballername ="Messi"

let Morefootballer = Footballername
Morefootballer ="Lionel Messi"
console.log(Morefootballer)
console.log(Morefootballer)

let user ={
email:"messi88@gmail.com",
 userid :"lionel messi",

}

let user2 = user

user2.email = "messi10@yahoo.com"

console.log(user.email);
console.log(user2.email);