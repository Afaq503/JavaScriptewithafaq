const accountId = 14566
let accountEmail = "afaq@google.com"
var accountPassword = "123546"
accountCity = "SKP"
let accountState;

// accountId = 2 // not allowed
accountEmail="aftab@google.com"
accountPassword="12345"
accountCity = "LAH"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity, accountState])