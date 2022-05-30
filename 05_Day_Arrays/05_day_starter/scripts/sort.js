const fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];

fruits.sort((a, b) => {
    let dif = (a.length - b.length)
    if (dif != 0 ) return dif;
    else {
        value = (a[0].charCodeAt() - b[0].charCodeAt())
        return value;
    }
});

console.log(fruits);
let dictionary = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
