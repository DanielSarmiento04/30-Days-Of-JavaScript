let weekend = ['saturday','Sunday'];
let weekday = ['monday','tuesday','wednesday','thursday','friday'];
function verificar(){
    day = document.getElementById('day').value;
    if (weekend.includes(day.toLocaleLowerCase()))  alert(`${day}  is from weekend `);    
    else if (weekday.includes(day.toLocaleLowerCase()))  alert(`${day} is from weekday`);
    else alert(`${day} is not a day`);
}
// function verificar2(day){
//     if (weekend.includes(day.toLocaleLowerCase()))  alert(`${day}  is from weekend `);    
//     else if (weekday.includes(day.toLocaleLowerCase()))  alert(`${day} is from weekday`);
//     else alert(`${day} is not a day`);
// }




