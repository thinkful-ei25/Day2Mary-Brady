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