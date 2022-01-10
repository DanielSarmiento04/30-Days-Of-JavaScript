// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
let string = 'love';
let patternOne = /love/; // with out any flag
let patternTwo = /love/g; // 
let patternThree = /love/i; // 
let patternFour = /love/ig; // g-means to search in the whole text, i - case insensitive

console.log('patternOne',patternOne);
console.log('patternTwo',patternTwo);
console.log('patternThree',patternThree);
console.log('patternFour',patternFour);

/*string.match(substring);*/   //Sintaxis
let string2 = 'I love JavaScript. If you do not love JavaScript what else can you love.';

let array1 = string2.match(string); // inicialize a variable an assing a object(array) with information match
// console.log( typeof(array1) );
// console.log(array1.length);
console.log( 'string',array1 );
let array2 = string2.match(patternOne); // it's is equal to without  / /
console.log('patternOne',array2);
let array3 = string2.match(patternTwo); 
console.log('patternTwo',array3); // ["love", "love", "love"]
let array4 = string2.match(patternThree); 
console.log('patternThree',array4); // ["love", "love", "love"]
let array5 = string2.match(patternFour); 
console.log('patternFour',array5); // ["love", "love", "love"]
let des1 = array3 == array5;
console.log('array 3 es igual a 5',des1); // Dan el mismo resultado pero no son el mismo
// Let us extract numbers from text using regular expression. This is not regular expression section, no panic.

let txt = 'In 2019, I run 30 Days of Pyhton. Now, in 2020 I super exited to start this challenge'
let regEx = /\d/g // d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers, 
// if there is g after that it means global, search everywhere.
console.log(txt.match(regEx)); // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]
console.log(txt.match(/run+/gi));
