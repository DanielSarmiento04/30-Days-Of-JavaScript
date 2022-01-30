/*
    This file is the answer of level 1 challengue
*/

// let age = prompt('Enter your age: ');
// if (age >= 18) {
//     alert(`You are old enough to drive`);
// } else {
//     alert(`You are left with ${18 -age} years to drive to drive`);
// }


let num1 = prompt("Introduzca numero 1");//for compare
let num2 = prompt("Introduzca numero 2");

if (num1 > num2) {
    alert( `Le nombre plus grand  est ${num1} et le nombre plus petit est ${num2}` );
} else {
    alert( `Le nombre plus grand  est ${num2} et le nombre plus petit est ${num1}` );
}