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

console.log(regularuser.fullname.usernamess.userlastname);
