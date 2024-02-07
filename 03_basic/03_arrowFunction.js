const user = {
    username: "Afaq",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username} ,  welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "afaq"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username= "afaq"
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) =>  ({username:"afaq"})



console.log(addTwo(3,5));