'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits

console.clear();

// a. for 
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array);
});

fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning 
fruits.unshift('strawberry', 'peach');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
console.clear();
fruits.push('strawberry');
console.log(fruits);
fruits.splice(1); //1부터 모두 다 지움
console.log(fruits);
fruits.push('apple', 'banana', 'strawberry');
console.log(fruits);
fruits.splice(1, 1); //1부터 1개 지움
console.log(fruits);
fruits.splice(1, 1, 'watermelon', 'melon', 'apple'); //1부터 1개 지우고 그자리에 뒤에 내용을 추가함.
console.log(fruits);

// combine two arrays
const fruits2 = ['1', '2'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Seraching
// find the index
console.clear();
console.log(fruits);

//indexOf
console.log(fruits.indexOf('apple'));

//includes
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('watermelon2'));
console.clear();

//lastindexOf
console.log(fruits);
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));