'use strict';

//Functions as arguments(1)

/* function repeat(callback,number){
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
repeat(goodbye, 5); */



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
