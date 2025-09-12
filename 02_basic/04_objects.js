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
//const obj3 = {obj1, obj2}//**array mai ay ga liken different form ho ga yani ups and down yai nie object k ander object*/
const obj3= Object.assign({},obj1,obj2)//**object.assign* yai use kar ny sy single array object ay ga   */

console.log(obj3);
 