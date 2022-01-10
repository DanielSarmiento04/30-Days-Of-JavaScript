//trim(): Removes trailing space in the beginning or the end of a string.
let string = '   30 Days Of JavaScript   ' 
let firstName = ' Asabeneh '

let trim1 = string.trim('')+1; // remove all space for the begining and the final of a string
let split = trim1.split(''); // this is for see visual in a
console.log(split)
console.log(split[split.length - 1].length);

let trim2 = string.trim(' '); // remove all space for the begining and the end string
split = trim2.split('');
console.log(split)
console.log(trim2);