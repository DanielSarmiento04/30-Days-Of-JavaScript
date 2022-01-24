// Values Truthly value

let var1 = 0 ==  '0';
console.log(var1);
let var2 = undefined == undefined;
console.log(var2);
let var3 = '4' === `4`;
console.log(var3);

// falsy Truuthly values
let var4 = NaN === NaN;
console.log(var4);
let var5 = 4 === '4';
console.log(var5);
let var6 = null == 1;  
console.log(var6);

// Q3



// 4 > 3   true
// 4 >= 3  true
// 4 < 3   false
// 4 <= 3  false
// 4 == 4  true
// 4 === 4 true
// 4 != 4  false 
// 4 !== 4 false
// 4 != '4'false
// 4 == '4'true
// 4 === '4'false
console.log('===========================');
console.log(      4 !==4           );

let date = new Date();
console.log(`Aujourd'hui`,date);
let month =  {0:'Enero',1:'Febrero'};  // name of mosnth as dictionary or object

console.log(`Le mot`,date.getMonth());
let days={0:'lunes'};//Days as dictionary or object

let diaMes = date.getDate();
console.log('Dia del mes: ',diaMes);

let diaSemana = date.getDay();
console.log('Dia de la semana: ',diaSemana);
let hora = date.getHours();

console.log('Horas',hora);
let minutos = date.getMinutes();
console.log('Minutos',minutos);

let segundosTotales = date.getTime();
console.log('Segundos',segundosTotales);

const rango = require('../../../02_Day_Data_types/range.js');

let string2 = "y = -2 + 2x^2";
let operaciones = ['+','-','*','/'];
let numX = string2.match(/x/gi);

let i = 0;
let conclusion1 = true;  // Que es de grado 1 
for (const iterator of string2) {
    if(iterator === "x"){
        if (string2[i+1]=="^") {
            conclusion1 = false;  //Encontro una potencia
        }
    }
    i++;
}
console.log(conclusion1 );