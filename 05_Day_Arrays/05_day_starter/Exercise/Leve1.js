let EmptyArray = [];// Create a empty list of value

let Array5Number = [];
for (let index = 0; index < 10; index++) {
    Array5Number.push(index);   //Ad value to queued I think that i can make this better or the other side
}

console.log(Array5Number);      //Write the numbers of list
console.log(Array5Number.length);  //output the lenght list
// Array5Number.length = 3; //it's interesting and useful when you want reduce a list safely

lastIndex = Array5Number.length - 1;
let FirstItem = Array5Number[0];
const LastItem = Array5Number[lastIndex];

const MiddleIndex = Array5Number.length % 2 != 0  ? Math.floor( Array5Number.length / 2) : [(Array5Number.length / 2) - 1, Array5Number.length / 2]; // Get middle index

const MiddleItem = typeof(MiddleIndex) == 'number' ? Array5Number[MiddleIndex] : [Array5Number[ MiddleIndex[0] ],Array5Number[ MiddleIndex[1] ]]; // get middle itme
console.log(FirstItem,LastItem,MiddleItem);


function PartOfArray(array) {{
    let FirstItem = array[0];
    let LastItem = array[array.length-1];
    let MiddleIndex = array.length % 2 != 0  ? Math.floor( array.length / 2) : [(array.length / 2) - 1, array.length / 2]; // Get middle index
    let MiddleItem = typeof(MiddleIndex) == 'number' ? array[MiddleIndex] : [array[ MiddleIndex[0] ],array[ MiddleIndex[1] ]]; // get middle itme
    return [FirstItem,MiddleItem,LastItem];
}}

let itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]; //Companies names

console.log(PartOfArray(itCompanies));

let newCompanies = itCompanies.map(company => company.toUpperCase());
console.log(newCompanies);

let stringCompanies = itCompanies.join(", ");

console.log(stringCompanies);

let CompaniesWithMoreO = [];

itCompanies.forEach(element => {
    let value = element.toLowerCase().match(/o/ig) ;
    if (value != null && value.length == 2) { // it's interesting because value is not necessarily  Array
        CompaniesWithMoreO.push(element);
    }
});

console.log(CompaniesWithMoreO);