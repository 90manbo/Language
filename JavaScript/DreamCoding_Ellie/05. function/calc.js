'use strict';

function calc(command, a, b) {
    if(command === '+') {
        return a + b;
    }else if(command === '-') {
        return a - b;
    }else if(command === '/') {
        return a / b;
    }else if(command === '*') {
        return a * b;
    }
}

console.log(calc('+', 1, 2));
console.log(calc('-', 1, 2));
console.log(calc('*', 1, 2));
console.log(calc('/', 1, 2));