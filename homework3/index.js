// task1 (1)
let result = 1;
let arr = [2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
	result *= arr[i];
}
alert(result);


// task2
let arr = [0, 1, 2,  3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13, 14, 15];
for (let i = 0; i < arr.length; i++) {  
    if (i % 2 === 0){
    console.log(arr[i] + " is Even");
    }
    else {
    console.log(arr[i] + " is Odd");
    }
}


// task4 (не бачу помилки, але чомусь не працює)
let a = prompt('Enter the variable a');
let b = prompt('Enter the variable b');
function raiseToDegree(a, b) {
    if (Number.isInteger(a, b)) {
        result Math.pow(a, b);
        alert (result);  
    } 
    else {
        alert('I work with integers only :(');
    }   
} 
raiseToDegree()


// task5
function findMin(arguments){
    let minValue = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (minValue > arguments[i]) minValue = arguments[i];
    }
    return minValue;
}
findMin([])


// task6 
function arrayUnique(arr) {
    const object = {};
    const myArray = [];
    var j = 0;
    for(let i = 0; i < arr.length; i++) {
         if(object[arr[i]] !== 1) {
               object[arr[i]] = 1;
               myArray[j++] = arr[i];
         }
    }
    return myArray;
}
arrayUnique([])


// task8
function firstLetterUpCase(str) {
return str
    .toLowerCase()
    .split(' ')
    .map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
 }
 console.log(firstLetterUpCase('i love java script'))
