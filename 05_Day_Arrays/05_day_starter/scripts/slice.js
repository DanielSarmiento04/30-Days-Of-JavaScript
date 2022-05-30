// yeiiii I undertand the  arrow fuction


let Array1 = (a, b) => {
    return a + b
}

// console.log(answer);
let numbersArray = [2, 3, 5, 7, 7, 8, 9, 34]; //8 length
console.log("numbersArray", numbersArray);

let newNumbersArray = numbersArray.slice(1, 5); // cut out the numbers Array from index 1 to index 5
console.log(newNumbersArray);

newNumbersArray = numbersArray.slice(1); // cut out the numbers Array from index 1 to the end
console.log(newNumbersArray);

newNumbersArray = numbersArray.slice(-3); // cut out the numbers Array from index -3 to the end || -3 is taken from the end
console.log(newNumbersArray);

newNumbersArray = numbersArray.slice(-4, -1); // cut out the numbers Array from index -4 to -1 || -4 is taken from the end && -1 isn't taken
console.log(newNumbersArray);

console.log(numbersArray.length);
console.log(numbersArray[numbersArray.length - 1]);