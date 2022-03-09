// yeiiii I undertand the  arrow fuction


let Array1 = (a,b) => {  
    return a+b
}

let Array2 = [2,4,6,8,2,7,4];

let Array3 = [1,3,5,7,9];

const answer = Array3.map(  function(value,index,array){
   if (index == 0) {
       return value;      
   }
   else {
       first = Math.floor( array.length / index );
       second = first + 1;
       return (first,second);
   };
});
//true is better than index of I think
console.log(answer);