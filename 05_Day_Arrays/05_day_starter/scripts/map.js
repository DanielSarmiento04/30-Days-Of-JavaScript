let Array2 = [2, 4, 6, 8, 2, 7, 4];

let Array3 = [1, 3, 5, 7, 9];

const answer = Array3.map(function(item, index) {
    if (item == 1) {
        return item * 2;    
    }
}  
    );
console.log(answer)

// function (value, index, array) {
//     return array;
// }