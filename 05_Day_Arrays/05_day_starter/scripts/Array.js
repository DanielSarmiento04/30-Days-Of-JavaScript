const array1 = Array(4); //[empty,empty,empty,empty]
for (let index = 0; index < 5; index++) {  //[0,1,2,3,4]
    array1[index] = index;
}
console.log(array1);