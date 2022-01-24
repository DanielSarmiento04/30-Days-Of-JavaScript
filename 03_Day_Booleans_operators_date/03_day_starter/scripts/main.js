let num1 = 4;
let num2 = 3;
let sum = num1 + num2;
let diff = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;
let remainder  = num1 % num2;
let powerof = num1 ** num2;

console.log(sum,diff,mult,div.toFixed(3),remainder,powerof);

let radio = 100; // in meters
const areaOfCircle = Math.PI *radio; // in meters^2
console.log(areaOfCircle);  // print areaof circle

let boilingPoint = 100; // boiling point of water in °C
let bodyTemp = 37; //in °C
let g = 9.81; // Aceleration world


let text = `The boiling point of water is ${boilingPoint} °C. \nHuman body tempreature is ${bodyTemp}°C.\nThe gravity of earth is ${g} m//s.`;
console.log(text);
//======================================================================================//
/* Part 2 */
console.log( `3 == '3' `,3 == '3' );   // true
console.log( `3 === '3'`,3 === '3');  //false
console.log( `3 != '3' `,3 != '3' );   //false
console.log( `3 !== '3'`,3 !== '3'); // true

console.log(0 == false);         // true, equivalent
console.log(0 === false);        // false, not exactly the same
console.log(0 == '');            // true, equivalent
console.log(0 == ' ');           // true, equivalent
console.log(0 === '');           // false, not exactly the same
console.log(1 == true);          // true, equivalent
console.log(1 === true);         // false, not exactly the same
console.log(undefined == null);  // true
console.log(undefined === null); // false
console.log(NaN == NaN);         // false, not equal
console.log(NaN === NaN);        // false
console.log(typeof NaN);         // number

console.log('mango'.length == 'avocado'.length);  // false
console.log('mango'.length != 'avocado'.length);  // true
console.log('mango'.length < 'avocado'.length);   // true
console.log('milk'.length == 'meat'.length);      // true
console.log('milk'.length != 'meat'.length);      // false
console.log('tomato'.length == 'potato'.length);  // true
console.log('python'.length > 'dragon'.length);   // false

let value = NaN + NaN + NaN + NaN + NaN + NaN + NaN + NaN + NaN;
console.log(value);

//=============================================================//
// Part 3 

let count = 0;
console.log(++count); // summ 1 inmediatly 
console.log(count++); // sum 1 in this line, but you only can use this response after this lines
console.log(count);
console.log(--count); //1
console.log(count--); //1
console.log(count); //0

//=============================================================//
// Part 4

let num3 = 5;

(num3 > 0)?console.log(`${num3} is positive number`):console.log(`${num3} is a negative number`);

let firstCheck = false,
secondCheck = false,
access = firstCheck ? "Acceso Permitido" : (secondCheck ? "Acceso permitido" : "Acceso denegaddo");

console.log( access ); // muestra "Acceso Permitido"

// let sol = confirm("Desea permitir cookies") : console.log();

async function ObtenerFecha (){
    const fecha = await new Date();
    document.getElementById("prueba").innerHTML  =  fecha.getFullYear().toString(); 
}
// ObtenerFecha();

let date = new Date();
console.log(date.getMonth());