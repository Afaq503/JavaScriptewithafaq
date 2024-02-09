// if

// const temperature = 41;
// if (temperature < 50) {
    // console.log("Temperature is less then 50");
// } else {
    // console.log("Temperature is gretter then 50");
// }
// console.log("Ok Excute");

// Condional oprater
//  <, >, <=, >=, ==, ===, !=, !==

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power ${power}`);
// }
// console.log(`User power ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less then 500");
// } else if (balance < 750) {
//     console.log("less the 750");
// } else if (balance < 900) {
//     console.log("less then 900");
// } else {
//     console.log("less then 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged In");
}