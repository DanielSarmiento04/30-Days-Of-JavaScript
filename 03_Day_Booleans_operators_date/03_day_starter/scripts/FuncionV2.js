/** esta es una vesion mas optima de optener el resultado teniendo en cuenta todas las posibilidades */


function Calculo (ecuacion){
    let operaciones = ['+','-','*','/',"x","="];
    // Condiciones
    let i = 0;
    let conclusion1 = true;  // Que es de grado 1 
    let pendiente = 0;
    let respuesta = "";
    let yAxisPoint = 0;
    let contador = 0;
    let subIndex ,desicion,value;
    // Proceso
    let stringArray = ecuacion.trim().split("");
    console.log(stringArray);
    
    for (let index = 0; index < stringArray.length; index++) {
        switch (stringArray[index]) {
            case '-':
                subIndex = index+1; // para buscar dentro de substring del
                desicion = true;
                value = "-";
                while (desicion &&  subIndex < stringArray.length ) {
                    if (!operaciones.includes(stringArray[subIndex])) {
                        value = value.concat(stringArray[subIndex]);
                    } else {
                        desicion = false;
                        break;
                    }
                    subIndex++;
                }
                if (stringArray[subIndex]=='x') {
                    pendiente += Number(value);            
                } else {
                    yAxisPoint += Number(value);
                }
                break;
        
            case '+':

                subIndex = index+1; // para buscar dentro de substring del
                desicion = true;
                value = "+";
                while (desicion &&subIndex < stringArray.length) {
                    if (!operaciones.includes(stringArray[subIndex])) {
                        value = value.concat(stringArray[subIndex]);
                    } else {
                        desicion = false;
                        break;
                    }
                    subIndex++;
                }
                if (stringArray[subIndex]=='x') {
                    pendiente += Number(value);            
                } else {
                    yAxisPoint += Number(value);
                }

                break;
        }
    }
    return [pendiente,yAxisPoint];
}
module.exports ={
    Calculo
}