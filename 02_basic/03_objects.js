// singleton
//Object.create ***esy ko bolty hia singleton esy sy banta hai **

// object literals
/****how symbol declare */

const Losym= Symbol("GOL1") 

const Jsuser = {
    name : "kashif",
    "full name" : "Mehmood",
    age: 23,
    [Losym]: "GOL1",
    locaton:"islamabad",
    email:"mirkashi111@gmai.com",
    address: false,
    lastentery:["sunday","monday"]

}

console.log(Jsuser.email); // eik tareeeka yai b hai vlaue nikal ny ka liken yai mery kheyal mai sahi tareek nahi hai liken normal yai new user k liyea shai hai.

//is k elwa eik b tareeka hai jo thora professional hia.
console.log(Jsuser["email"])
console.log(Jsuser["full name"]) //jab uper value variable or data string mai hou phr neachy is tarah console likh na pary ga.is k elwa error ay ga.
 //**agr nahi samja ie to ja k mnd mai data types dekh lo */

 //symbol declare
 console.log(Jsuser[Losym]);


//object ki value ko access kasy karty hai,dot notaion sy**must b remember this thing

//change value like
Jsuser.email = "mirkashi111@hotmail.com"
//value lock kar ny jays k ap chaaty hai k koi b change na kary tu ous k liye hum use karty hia.freez yanee object ko freez kar dyty hai.jasy
Object.freeze(Jsuser)
Jsuser.email = "mirkashi12@gmail.com"
console.log(Jsuser);

//*******ab seekh na hai function kasy add karty hai  */
Jsuser.greeting = function(){
    console.log("hello javascript");
}
Jsuser.greeting2 = function(){
    console.log(`hello messi, ${this.locaton}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());

//note jab b value ko access kar na ho tu dot sy kar na hai.