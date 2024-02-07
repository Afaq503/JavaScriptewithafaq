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
console.log(Jsuser.greeting())

Jsuser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(Jsuser.greeting2())