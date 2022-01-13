let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let wordsArray = string.split(' ');
let numWords = wordsArray.length;
console.log(numWords);  // should be 20 

let string2 = 'You cannot end a sentence with because because because is a conjunction';
let numWordsString2 = string2.match(/because/gi).length;
console.log(numWordsString2); // should be 3

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let ArrayChart = ['%','$','@','%'];

function removeAll (Array,text){
    for (const character of Array) {
        text = text.replaceAll(character,'');
    }
    return text;
}

let newSentence = removeAll(ArrayChart,sentence);
console.log(newSentence);
let String3 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let ArrayText = String3.split(' ');
console.log(ArrayText);
let suma = 0;
for (const iterator of ArrayText) {
    if (isNaN(iterator) ==false) {  
    suma += Number(iterator);
    } 
}
console.log('SUma = ',suma);