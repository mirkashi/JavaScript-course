const marvel_heros = ["Hulk","thor","aquaman"]
const dc_heros  = ["superman","batman","spiderman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][2]);

//const allhero = marvel_heros.concat(dc_heros) //using concat tho merg t array in one.
//console.log(allhero);

const all_new_heros = [...marvel_heros, ...dc_heros] //spread b whoie kam kar ta hai jo "concat"karta  karkartahai.

//console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6],8,[9,10,[11,12]]]

const real_array = another_array.flat(Infinity)//"infinity" ka kam hai hary arry ko eik sath likh na agr 3/5 array hai eik line mai tuhum ousy eik sth proper kar sakty hai infinity ka use kar k.,
console.log(real_array);


console.log(Array.isArray("kashif"))
console.log(Array.from("kashif")) // form ka kam hai "string" value ko array mai convert kar na.
console.log(Array.from({name:"kashif"})) // intersting "q k ap ko is ko phealy bol na pary ga k mai kiya array baaou like keys ko object etc etc"


let score1 = 200
let score2 =3000
let score3 =4000

console.log(Array.of(score1,score2 ,score3));

///note 

//thora sy khud sy phar lou array k bary mai like "isArray","from","of" in ko eik eik dafa dekh lou.