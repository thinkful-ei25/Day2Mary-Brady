'use strict';

function average(numbers) {
    let total = 0;
    numbers.forEach(function(element) {
        total += element;
    });
    return total/numbers.length;
    
}

//tests

let testArray = [10, 10, 10, 15, 15]; //Average should be 12

console.log(average(testArray));