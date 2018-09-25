'use strict';
/*
//Functions as arguments(1)

function repeat(callback,number){
  for(let i=0; i < number; i++){
    callback();
  }
} 


function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5); 



// Functions as Arguments (2)

function filter(arr, callback) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i])) {
      newArray.push(arr[i]);
    }  
  }
  return newArray;
}

// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];


const filteredNames = filter(myNames, function(name) {
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']



//functions as return values

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  let x = 'time';
  return function(location) {
    warningCounter++;
    if(warningCounter >= 2){
      x='times';
    }
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${x} today!`);
  };

}

const hurricaneRocksWarning = hazardWarningCreator('Rock-Hurricane on the move');
const floodFireWarning = hazardWarningCreator('There\'s a flood on fire!');
const beeEarthquakeWarning = hazardWarningCreator('BEES ARE CAUSING AN EARTHQUAKE AT AN ALARMING RATE');
let city1 = 'Floridatown';
let city2 = 'Lost Vegas';
let city3 = 'Sesame Street';
hurricaneRocksWarning(city1);
hurricaneRocksWarning(city2);
hurricaneRocksWarning(city3);
floodFireWarning(city3);
floodFireWarning(city2);
floodFireWarning(city1);
beeEarthquakeWarning(city2);
beeEarthquakeWarning(city1);
beeEarthquakeWarning(city3);

//forEach, filter and map
let testArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
//let testArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

testArray.filter(steps => steps[0] >= 0 && steps[1] >= 0)
//[[0, 0], [0, 5], [3, 2]];

.map(sum => sum[0] + sum[1])
//[0, 5, 5 ];

.forEach(turtle => console.log(`The turtle took ${turtle} steps.`));
//"The turtle took 0 steps"
//"the t took 5"
//"the t took 5"
*/
// reduce drill




const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let reduceArray = input.split(' ');
const accum = (accum, initialValue) => (initialValue.length === 3) ? accum + ' ' : accum + initialValue[initialValue.length-1];

console.log(reduceArray.reduce(accum, '').toUpperCase());








//.toUpperCase
// "the cat moon time bye"
//Accumulator = "";
//current value

// if 3 char = " "
// accumulator = " "
// accumulator = "  "
// accumulator = " N"
// accumulator = " NT"

    
