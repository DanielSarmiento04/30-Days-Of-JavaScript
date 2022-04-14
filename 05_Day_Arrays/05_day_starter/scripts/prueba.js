const Array1 = [];

for (let index = 0; index < 5; index++) Array1.push(index);
const string = `string`;
string[string.indexOf('t')] = 'g';  //Como se habia visto antes los datos primitivos no son mutables
Array1[0] = 7; 
console.log(Array1,string,string.indexOf('t'));

let array = [1,2,3,4,5]

let stringArray = array.toString().replace(/,/g, ' ');
console.log(stringArray,stringArray.length);