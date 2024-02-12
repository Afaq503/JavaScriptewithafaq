//  for of

const arr =[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello  worlds"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// Maps
const map = new Map()
map.set('PK','Pakistan')
// map.set('PK','Pakistan')
map.set('IN','India')
map.set('PHL','Phalestain')

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-',value);
}

const myObject = {
    'Game1':"NFS",
    'Game2':"GTA"
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
    
// }
