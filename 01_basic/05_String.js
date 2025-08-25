const name = "Kashi"

const age = 23

// console.log(name +  age + " Killer");

console.log(`hello my name is ${name} and my age is ${age}`);

const gamename = new String(`PUBG-GAME`)

console.log(gamename[0]);
console.log(gamename.__proto__);


//console.log(gamename.length);
//console.log(gamename.toUpperCase);
console.log(gamename.charAt(3));
console.log(gamename.indexOf('G'));

const newstring = gamename.substring(0,4)

console.log(newstring);

const anotherstring = gamename.slice(-8, 4)

console.log(anotherstring);

const newstringOne = "   kashif  "

console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://messi.com/barcelon-10afan"

console.log( url.replace('20', '+'))

console.log( url.includes('lionel') )

console.log(gamename.split('_'));