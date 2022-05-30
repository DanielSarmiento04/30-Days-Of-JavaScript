class Carro {
    constructor(placa, modelo) {
        this.placa = placa;
        this.modelo = modelo;
    }
    toString() {
        return `${this.placa} - ${this.modelo}`;
    }
}


const numbersArray = [2, 3, 5, 7, 7, 8, 9, 34];

let newNumbersArray = numbersArray.splice(4); // creates a new array with the elements from index 1 to the end
console.log(newNumbersArray);

console.log(numbersArray);
newNumbersArray = numbersArray.splice(0, 4, [1, 2, 3, 4, 5]); // creates a new array with the elements from index 1 with a length of 2
console.log(numbersArray, "second");

const stringArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // alphabet

let newStringArray = stringArray.splice(-6, 5); // take  the last five item from the string array
console.log(newStringArray);

newStringArray = stringArray.splice(1, 6);
console.log(stringArray, "third");

let carro1 = new Carro("ABC-1234", "Fusca");
let carro2 = new Carro("DEF-5678", "Gol");
let carro3 = new Carro("GHI-9012", "Palio");
let carro4 = new Carro("JKL-3456", "Uno");
let carro5 = new Carro("JKL-3457", "Celta");
let carro6 = new Carro("JKL-3458", "Vectra");

let List = [carro1, carro2, carro3, carro4];

let newListCar = List.splice(0, 2, carro5, carro6, carro5);

newListCar.forEach(carro => console.log(carro.toString()));
console.log("================================================================");
List.forEach(carro => console.log(carro.toString()));
