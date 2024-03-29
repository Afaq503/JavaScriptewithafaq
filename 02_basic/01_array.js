//  array
const myArr  = [1,2,3,4,5,6]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1]);

// Array methods

// myArr.push(7)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

//  slice, splice

// console.log("A",myArr);

const myn1 = myArr.slice(1,3)
// console.log("B",myn1);

const myn2 = myArr.splice(1,3)
// console.log("C", myn2);

// Array part 2

const marvel_heros = ["Thor","Ieonman", "spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)
const another_array = [1,2,3,[4,5,6],7,[6,5,[2,8]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


console.log(Array.isArray("Afaq"));
console.log(Array.from("Afaq"));
console.log(Array.from({name: "Afaq"}));  // interesting
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))