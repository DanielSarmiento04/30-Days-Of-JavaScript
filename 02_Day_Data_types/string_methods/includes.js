// includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.
let string = '30 Days Of JavaScript';   
let country = 'Finland';
let noll = 'String' ;

let answer1 = string.includes(country);  // if country is part of sintrg
console.log(answer1);

let answer2 = string.includes('days');  // if days is part of string sintrg
console.log(answer2);

//let answer3 = noll.includes();  // if 
//console.log(answer3);

let answer3 = string.includes('Script');
console.log(answer3);

if (noll.includes('o')) {
    
} else console.log(3);