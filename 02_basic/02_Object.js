//  singleton

// Object.create

// object literals

const mySymbol = Symbol("Key1")
const Jsuser = {
    name: "Afaq",
    age:22,
    [mySymbol]:"mykey2",
    location:'SKP',
    email:'afaq@gmail.com',
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);// this is best way to access these value
// console.log(Jsuser[mySymbol]);
// console.log(mySymbol);

Jsuser.email = 'aftab@chatgpt.com'
// Object.freeze(Jsuser)
Jsuser.email = 'aftab@chatgpt.yahoo'
// console.log(Jsuser.email);

Jsuser.greeting = function(){
    console.log("Heloo Jsuser");
}
// console.log(Jsuser.greeting())

Jsuser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
// console.log(Jsuser.greeting2())
// =============================================================
// this is a singleton object
// const foodpanda = new Object()

const foodpanda = {}

foodpanda.id="123"
foodpanda.name='Afaq'
foodpanda.isLoggedIn= false

// console.log(foodpanda);

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userfullname:{
            firstname:"afaq",
            lastname:'Gujjar'
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {
    1:"a",
    2:'b'
}
const obj2 = {
    3:"c",
    4:'d'
}
// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2} // spread oprater
// console.log(obj3);
const  users = [
    {
        id:1,
        email:'a@gmail.com'
    },
    {
        id:2,
        email:'b@gmail.com'
    },
    {
        id:3,
        email:'c@gmail.com'
    },
]
// console.log(users[1].id);
// console.log(foodpanda);

// console.log(Object.keys(foodpanda));
// console.log(Object.values(foodpanda));
// console.log(Object.entries(foodpanda));

// console.log(foodpanda.hasOwnProperty('isLogged'));

// ===============================================================

// Object desturctureing

const course = {
    course: "Js is Urdu",
    price: "999",
    courseAuther: "Afaq"
}

// course.courseAuther
const {courseAuther: auther} = course
console.log(auther);
// DeSturcture in React 

// const navbar = ({company}) => {

// }
// navbar(company = "afaq")

// js formate

// {
//     "name": "afaq",
//     "coursename":'js in Urdu',
//     "price":"free,"
// }