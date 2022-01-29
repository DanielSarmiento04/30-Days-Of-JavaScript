let date = new Date();

let year = date.getFullYear();//Para armar un string con los datos
let day = date.getDate();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let data = [day, month, hour, minutes];

for (let i = 0; i < data.length; i++) {
    console.log(data[i].toString().length);
    if (data[i].toString().length == 1) {
        data[i] = '0'.concat(data[i].toString());
    }
}

console.log(data);
[day,month,hour,minutes] = data;  // redistrtibuyendo data


let shortDate1 = `${year}-${month}-${day} ${hour}:${minutes}`;
let shortDate2 = `${day}-${month}-${year} ${hour}:${minutes}`;
let shortDate3 = `${day}/${month}/${year} ${hour}:${minutes}`;

console.log(shortDate1,'Le Question 1');       //ouput
// console.log(shortDate2, 'Le question deux');
// console.log(shortDate3,'Le question trois');