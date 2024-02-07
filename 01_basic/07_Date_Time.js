//  Dates

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 24)
let myCreatedDate = new Date("01-05-2024")

// console.log(myCreatedDate.toDateString())
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: 'pk'
})

console.log(newDate);