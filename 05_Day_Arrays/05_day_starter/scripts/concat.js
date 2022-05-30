// yeiiii I undertand the  arrow fuction

const SumArray = (a,b) => 
{

    let maxLength = Math.max(a.length,b.length);
    let result = [];
    for (let index = 0; index < maxLength; index++) 
    {
        let value1 = isNaN(a[index]) ? 0 : a[index];
        let value2 = isNaN(b[index]) ? 0 : b[index];
        result.push(value1+value2);
    }    
    return result;
}

let Array1 = (a, b) => {
    return a + b
}

let Array2 = [2, 4, 6, 8, 2, 7, 4];

let Array3 = [1, 3, 5, 7, 9];

let Array4 = Array2.concat(Array3);

console.log(SumArray(Array2, Array3));
