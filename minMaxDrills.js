'use strict';

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

// function min(numbers){
//   return smallestNumber;
// }


//Tests
let testArray = [1, 4, 5, 6, 10, 100, 4, 2];

max(testArray);
