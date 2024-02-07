const name = "Afaq"
const repoCount = 50

// console.log(name + repoCount + "Value");

// String interpulation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("Afaqag")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('q'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4,4)
console.log(anotherString);

const newStringOne = " qafa    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "hhtps://afaq.com/afaq%20gujjar"
url.replace('%20','-')
console.log(url.replace('%20','-'));

console.log(url.includes('afaq'));