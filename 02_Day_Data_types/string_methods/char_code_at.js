// charCodeAt(): Takes index and it returns char code(ASCII number) of the value at that index
let string = '30 Days Of JavaScript'

console.log(string.charCodeAt(0))        // D ASCII number is 68

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

let string2 = `Daniel Sarmiento`;


for (const key in string2) {
    if (string2.hasOwnProperty.call(string2, key)) {
        const element = string2[key];
        let asciinumber = element.charCodeAt(element);
        console.log(asciinumber);
    }
}