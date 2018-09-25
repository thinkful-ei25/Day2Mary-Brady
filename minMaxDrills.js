'use strict';
/*
function max(numbers){
  let largestNumber = numbers[0];
  let counter = 1;
  while (counter <= numbers.length) {
    if (numbers[counter] > largestNumber) {
      largestNumber = numbers[counter];
    }
    counter++;
  }
  console.log(largestNumber);
  return largestNumber;
}




//Tests
let testArray = [1, 4, 5, 6, 10, 100, 4, 2];

max(testArray); 
*/


function min(numbers) {
 let smallestNumber = numbers[0];
 let counter = 1;
 while (counter <= numbers.length) {
  if (numbers[counter] < smallestNumber) {
    smallestNumber = numbers[counter];
  }
  counter++;
 }
 console.log(smallestNumber);
return smallestNumber;
}

//tests
let smallArray = [0,-200,1,-50,300];
min(smallArray);