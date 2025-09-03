//Dates

let mydate = new Date()
//console.log(mydate.toString());
//console.log(mydate.toDateString());
//console.log(mydate.toLocaleString());
//console.log(typeof mydate);

//let mycreatedDate = new Date(2025, 0 ,23)
//let mycreatedDate = new Date(2025, 0 ,23 ,5 ,6)
//let mycreatedDate =new Date("2025-01-15")
let mycreatedDate = new Date ("01-16-2025")
console.log(mycreatedDate.toLocaleString());

let mytimestamp = Date.now()

//console.log(mytimestamp);
//console.log(mycreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 2);
console.log(newDate.getDay());

//'${newDate.getday()} and the time'

newDate.toLocaleString('default', {
    weekday: "long",
})
