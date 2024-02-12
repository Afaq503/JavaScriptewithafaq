// for in loop
const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
};


// for of loop
const  programming = ["js",'rb','py','cpp']

for (const key in programming) {
    // console.log(programming[key]);
}

//  Map is not itertable


const map = new Map()
map.set('Pk',"Pakistan")
map.set('IN',"India")

for (const key in map) {
//    console.log(map);
}
