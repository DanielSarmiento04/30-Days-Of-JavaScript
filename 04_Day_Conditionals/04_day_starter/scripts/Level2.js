/*
    This file is the answer of level 2 challengue
*/

// let score = prompt("Introduzca yo calificación");

// let letra = null;
// switch (true) {
//     case score >= 80 && score <= 100:
//         letra = "A";
//         break;
//     case score >= 70 && score < 80:
//         letra = "B";
//         break;
//     case score >= 60 && score < 70:
//         letra = "C";
//         break;
//     case score >= 50 && score < 60:
//         letra = "D";
//         break;
//     case score >= 0 && score < 50:
//         letra = "F";
//         break;
//     default:
//         break;
// }

// let texto = `votre qualification est ${letra}`;
// alert(texto);



// part 2:
let Grupo1 = {
    months : 'September,October,November'.toLowerCase().split(','),
    season : 'autumn'
}
let Grupo2 = {
    months : 'December,January,February'.toLowerCase().split(','),
    season : 'Winter'
}
let Grupo3 = {
    months :'March,April,May'.toLowerCase().split(','),
    season : 'Spring'
}
let Grupo4 = {
    months : 'June,July,August'.toLowerCase().split(','),
    season : 'Summer'
}

let GeneralList = [Grupo1,Grupo2,Grupo3,Grupo4];
let month = "April";

for (const lista of GeneralList) {
    if(lista.months.includes(month.toLowerCase())){
        console.log(`The season is ${lista.season}.`)
    }
}


let weekend = ['saturday','Sunday'];
let weekday = ['monday','tuesday','wednesday','thursday','friday'];
let day = prompt('Please write a DAY');
if (weekend.includes(day.toLocaleLowerCase()))  alert(`${day}  is from weekend `);    
else if (weekday.includes(day.toLocaleLowerCase()))  alert(`${day} is from weekday`);
else alert(`${day} is not a day`);

function verificar(){
    
}