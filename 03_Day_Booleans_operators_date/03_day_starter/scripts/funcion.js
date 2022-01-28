
/* Como todo desarrollador junior esta es una muestra de que muchas veces complicamos 
    nuestro trabajo y aveces no llegamos a la meta.
*/



let string2 = " y = -2 -6x  -3+2x";
let operaciones = ['+','-','*','/'];
// Condiciones
let i = 0;
let conclusion1 = true;  // Que es de grado 1 
let pendiente = 0;
let respuesta = "";
let yAxisPoint = 0;
let contador = 0;

let stringArrayReverso = stringArray.reverse();


// Proceso
stringArray = string2.trim().replaceAll(" ","").split("").reverse();
console.log(stringArray,' Funcion');
for (const iterator of stringArray) {
    switch (iterator) {
        case "x":        
            if (stringArray[i-1]==="^") {
                conclusion1 = false;  //Encontro una potencia
                pendiente = null;
                break;
            }else{
                let subPendiente = '';
                contador = i;
                for (let buscador_Operandos = contador+1; buscador_Operandos < stringArray.length; buscador_Operandos++) {
                    if (operaciones.includes(stringArray[buscador_Operandos])) {
                        subPendiente = subPendiente.concat( stringArray[ buscador_Operandos ] );
                        break;
                    }
                    else{
                        subPendiente = subPendiente.concat( stringArray[ buscador_Operandos ] );
                        i = contador;
                    }
                }

                subPendiente = subPendiente.split("").reverse().toString().replaceAll(',','');
                pendiente += Number(subPendiente);
            }
            break;
        case `-`:
            
            if (stringArray[i-1] !=='x' && stringArray[i-1] != "=") {    
                let negativeValue = '';
                contador = i;
                for (let buscador_Operandos = contador-1; buscador_Operandos >0; buscador_Operandos--) {
                    if (!operaciones.includes(stringArray[buscador_Operandos])) {
                        negativeValue = negativeValue.concat(stringArray[buscador_Operandos]);
                        i = contador;
                    }else{
                        break;
                    }
                }
                let stringY_axis = negativeValue.split("").reverse().toString().replaceAll(",","");
                console.log(stringY_axis)
                yAxisPoint += Number(stringY_axis);

            } 

            break;

        case `+` :
            // let value2 = stringArray[i+1] ;
            // yAxisPoint += Number(value2);
            break;
    }
    i++;
}   

if (pendiente != null  && conclusion1 == true) {
    let response = `La pendiente es ${pendiente}, El corte con el eje y es ${yAxisPoint}`;
    console.log(response);
} else {
    
}
console.log(conclusion1 );