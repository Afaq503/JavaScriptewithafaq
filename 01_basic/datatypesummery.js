//  Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.1

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined;
const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bigNumber = 13246879987654312n


// Reference (Non primitive)

//  Array, Objects, Functions

const heros = ["Allama-e-Iqbal","Quaid"]
let myObj = {
    name :'Afaq',
    age : 18,
}
console.log(myObj);

const myFunction =function() {
    console.log("Hello World");
}

console.log(typeof bigNumber);


// -----------------------------------------------

// Stack (Primirive), Heap (Non-Primitive)

let myName = 'Afaq'

let anotherName = myName;
anotherName = 'Codewithafaq'

console.log(myName);
console.log(anotherName);

let userOne = {
    email: 'user1@google.com',
    id:1
}
let userTwo = userOne;

userTwo.email = "MAfaq@google.com"

console.log(userOne);
console.log(userTwo);
