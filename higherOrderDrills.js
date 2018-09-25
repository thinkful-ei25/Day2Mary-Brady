'use strict';

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

console.log(filteredNames) // => ['Rich', 'Ray']
// 


//functions as return values

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    let x = 'time';
    return function(location) {
        warningCounter++;
        if(warningCounter >= 2){
            x='times'
        }
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`)
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${x} today!`)
    }

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