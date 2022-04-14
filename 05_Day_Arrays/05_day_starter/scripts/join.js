// yeiiii I undertand the  arrow fuction


let Array1 = (a, b) => {
    return a + b
}

let Array2 = [2, 4, 6, 8, 2, 7, 4];

// let Array3 = [1, 3, 5, 7, 9];

let answer = -1 in Array2; // mira si el indice existe en el array

console.log(answer, Array2.includes([3]));

let answer2 = () => {
    if (Array2.indexOf(2) == -1) return false;
    else return true;
};
// let joinMethod = Array3.join(" | ");
// console.log(joinMethod);
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

let stringJoin1 = webTechs.join(" 🐿️   ");
console.log(stringJoin1);