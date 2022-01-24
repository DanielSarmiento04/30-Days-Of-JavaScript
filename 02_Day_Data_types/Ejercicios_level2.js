let string = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`;
console.log(string); //fisrtQuestion

let string2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
let type1 = '10';
let type2 = 10;
if (Number(type1) === type2) console.log(Number(type1),type2,'Son iguales');
let num1 = 9.81;
let num2 = Math.ceil(Number(num1));
if (num2 === 10) console.log(num2,'y',10);

let word1 = 'python',word2 = 'jargon';
let find = 'on';
let [des1,des2] = [word1.search(find),word2.search(find)];      //search an put in each one
console.log(des1,des2);
let statement = 'I hope this course is not full of jargon.';

if(statement.indexOf('jargon') != -1) console.log('si esta jargon');
else console.log('no esta');

let num3 = Math.random()*100;
console.log('numero entre 0 y 100',num3);

let num4 = Math.random()*50 + 50;
console.log('numero entre 50 y 100',num4);

let num5 = Math.random()*255;
console.log('numero entre 0 y 255',num5);

let string3 = 'JavaScript';
// let array1 = string3.split('');
// array1.forEach(element => { //Print each character
//     console.log(element);
// });

let newLocal = string3.length;
let numA = Math.ceil(Math.random()*newLocal);
console.log(string3[numA],'letra de javascript');

const Libreria = require('./range.js')

let Matrix = [];
// Parte de la derecha del objeto
let vectorC1 = []; // seccion de la columna 1
for (let i = 1; i < 6; i++){
    if( i === 1 ){
        let vector = [1,1,1,1] ;    
        Matrix.push(vector);
    }
    else{
        let vector = [];
        let lista = Libreria.range(0,4);
        for ( const exponente of lista ) {
            let numV = i**exponente;
            vector.push(numV)
        }
        Matrix.push(vector);
    }
    vectorC1.push(i);
    
}

for (var i = 0; i < Matrix.length; i++) {   
    Matrix[i].unshift(vectorC1[i]);
}


console.log(Matrix);
               
let StringF = 'You cannot end a sentence with because because because is a conjunction';

let newStringF = StringF.substr(0,StringF.indexOf('because')-2); //it's -2, because 31 is b and -1 take the space, 2 arg of subtr tak length of string
let newStringF2 = StringF.substr(StringF.lastIndexOf('because')+8, StringF.length - StringF.lastIndexOf('because')-8); //

console.log(newStringF);
console.log(newStringF.length);
console.log(newStringF2);
console.log(StringF.length - StringF.lastIndexOf('because')-8);