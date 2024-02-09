//  Truthy and false 

const userEmail = "a@afaq.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// false value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy value
// true, "0", 'false', " ",[],{}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emtyobj = {}
if (Object.keys(emtyobj).length === 0) {
    console.log('Object is empty');
}

// Nullish Coalescing Operatore (??):: null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = undefined ?? null

// console.log(val1);

// Terniary Operatore
// Condition ? true : false

const iceTesPrice = 100

iceTesPrice >= 80 ? console.log("Less than 80") : console.log("More then 80");