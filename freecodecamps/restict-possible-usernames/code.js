let username = "JackOfAllTrades";
//have to begin with the letters => ^[a-z]
//zero or more digits ath the end => \d for digits, * for zero or more, $ for the end
// i for ignore uppercase or lowercase
//^[a-z][a-z]+ => at least two characters long and two letters long usernames must be alphabetic
// | stands for 'or'
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);ß