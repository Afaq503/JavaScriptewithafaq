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