//const whatsappuser = new Object() /***yai eik singelton object or nechy wala non-singelton like dono mai koi difference nahi.dono he sam hai  */
const whatsappuser ={}

whatsappuser.id = "kashi"
whatsappuser.name = "mir"
whatsappuser.isloggedin =  false

//console.log(whatsappuser);

const regularuser ={

    email: "mirkashi111@gmail.com",
    fullname : {
        usernamess : {
            fathername : "khalid",
            userlastname:"mehmood"

        }
    }
}

//console.log(regularuser.fullname.usernamess.userlastname);

const obj1 ={1:"kashi",2:"mir",}
const obj2 ={4:"is",5:"good boy",}
const obj4 ={6:"legend",7:"excellent"}
//const obj3 = {obj1, obj2}//**array mai ay ga liken different form ho ga yani ups and down yai nie object k ander object*/
//const obj3= Object.assign({},obj1,obj2, obj4)//**object.assign* yai use kar ny sy single array object ay ga   */or jo empty bracket rakhi hai wo extra value add kar ny k liya hai.agar byd mai kar ni ho.
//check on Object assign mdn...
const obj3={...obj1,...obj2,...obj4}//yai b object ko spread kar t ahia.
//console.log(obj3);
 


const user = [
    {

    id: 1,
    email: "Kashimir111@gmail.com"
},
{

    id: 1,
    email: "Kashimir111@gmail.com"
},
{

    id: 1,
    email: "Kashimir111@gmail.com"
},
{

    id: 1,
    email: "Kashimir111@gmail.com"
},
{

    id: 1,
    email: "Kashimir111@gmail.com"
},
]

user[1].email
//console.log(whatsappuser)

//console.log(Object.keys(whatsappuser));
//console.log(Object.values(whatsappuser));
//console.log(Object.entries(whatsappuser));

//console.log(whatsappuser.hasOwnProperty("islogged"));

const cours ={
coursename:"javascript",
price:"500",
created:"kashif mir"
}


const {created: cdd} = cours//destructure kiya hia yhn code object
//console.log(created)
console.log(cdd)


// "API" Kiya hota hia.abi k liyea yai samj lou k apna kam kise or k uper dal dyna.
//"api" backend sy khuch value ayti hia jasy "JSON".
// 

      {
//     name:"kashi",
//     courscreated:"Mir",
//     price:"free"               //is tarah likh ny json kehlata hai q k yai object ki tarah hai liken hai tu nahi
// }