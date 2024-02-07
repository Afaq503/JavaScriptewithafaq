

function sayMyName(){
    console.log("A");
    console.log("F");
    console.log("A");
    console.log("Q");
}

// sayMyName()

// function addTwoNumbers(number1,number2){  // this is parameter
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){  // this is parameter
    // let result = number1 + number2
    // return result
    return number1 + number2

}
// addTwoNumbers(3,5) // this is argument
const result = addTwoNumbers(4,5);
// console.log("Result: ",result);

function loginUserMessage(username = "Mafaq") {
    if(!username){
        console.log("Please enter a user name");
        return
    }
    return `${username} just Logged In`
}
// console.log(loginUserMessage("afaq"))
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,500,8000));

const user = {
    username: "afaq",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:'sam',
    price:299
})

const myNewArray = [200,300,600,500]

function returnSceondValue(getArray){
    return getArray[1]
}


// console.log(returnSceondValue(myNewArray));
console.log(returnSceondValue([200,300,500,600]));