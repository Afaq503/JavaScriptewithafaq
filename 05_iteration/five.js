const coding = ['java','js','c++','rub','rn']

// coding.forEach( function (item) {
//     console.log(item);
// } )

coding.forEach((item) => {
// console.log(item);
})

function printMe(item) {
    // console.log(item);
}

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName:'javaScripte',
        languageFileName:'js'
    },
    {
        languageName:'java',
        languageFileName:'java'
    },
    {
        languageName:'python',
        languageFileName:'py'
    },
]
myCoding.forEach( (item,index) => {
    console.log(item.languageName);
})