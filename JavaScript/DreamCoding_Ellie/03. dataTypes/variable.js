// 1. Use strict
// added in ES 5
// use ths for Vanilla Javascript
'use strict';

//////////////////////////////////////////////////////////////////////////////////

// 2. Variable (read and write)
// mutable
// let (added in ES6)

//global scope
let globalName = 'global name';
//block scope
{
    let name = 'park';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(globalName);
//블럭 밖이라 안보임
console.log(name);

//////////////////////////////////////////////////////////////////////////////////

// 3. var(don't ever use this)
// var hoisting(move declaration form bottom to top)
// 어디에 선언했는지에 상관없이 선언을 제일 위로 끌어 올림.
// block scope를 사용할 수 없음. 

//////////////////////////////////////////////////////////////////////////////////

// 4. constant(read only)
// use const whenever possible.
// only use let if variable needs to change

const daysInWeek = 7;
const maxNumber = 5;

//////////////////////////////////////////////////////////////////////////////////

// Note!
// Immutable data types: primitive types, frozen objects(i.e. object.freeze())
// Mutabale data types: all objects by default are mutable in JS
// favor immutable data type always for a few resons:
// - security
// - thread safety
// - reduce human mistakes

// 5. Variable types
// primitive type, single item: number, string, boolean, null, undefined, symbol
// object/reference type box container: 객체(배열, 함수, 정규 표현식)
// function, first-class function
const count = 15; //integer
const size = 15.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numberic values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const park = {name: 'park', age: 30};
park.age = 32;
console.log(`value: ${park.age}, type: ${typeof park.age}`);
//////////////////////////////////////////////////////////////////////////////////

//6. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0)); //error