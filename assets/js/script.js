"use strict"

let numbers = [25, 4, 19, 37, 40]

numbers.sort(function(a, b){
    return b - a;
})

console.log(numbers);