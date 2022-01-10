/*
    this File is about  a javascript excercice day 2
*/

// q1
let string = `30 Days Of JavaScript`;
console.log(string,'long:',string.length); // du premier au troiséme exercise
string = string.toUpperCase(); 
console.log(string);
let newString = string.substring(1,string.length); // 6
console.log(newString);

string = '30 Days Of JavaScript';

let newString2 = string.substring(0,3);
console.log(newString2);

let known = string.includes('Script');
console.log(known);
let arrayWords = string.split();
console.log(arrayWords);
let arrayWords_2 = string.split(' ');
console.log(arrayWords_2);
let string2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let arrayList1 = string2.split('');

let replace = string.replace('JavaScript','Python');
console.log(replace);
let chart_30 = string.charAt(30); // it doesn't exit #13
console.log(chart_30);

let chart_code_j = string.charCodeAt(string.indexOf('J'));
console.log('J:',chart_code_j);

let index_of = string.indexOf('a');
console.log('a:',index_of);
let statement = `You cannot end a sentence with because because because is a conjunction`;
let lastPosition = statement.lastIndexOf('because');
console.log('because',lastPosition); // 18
let fisrtPosition = statement.search('because');
console.log('because,','Search',fisrtPosition); //
string =' 30 Days Of JavaScript ';
let trim1 = string.trim(' ');
console.log('trim',trim1);
let des1 = string.startsWith(' ');
console.log('des startwith',des1);
let des2 = string.endsWith(' ');
console.log('des endwith',des2);

let first = '30 Days of';
let complete = first.concat(' JavaScript' );
console.log('complete',complete);

let repeat =complete.repeat(2); 