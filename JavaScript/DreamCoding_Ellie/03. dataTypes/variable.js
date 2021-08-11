//프로그래밍의 핵심 !! 입력!! 연산!! 출력!!

// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript
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


// var(don't ever use this)
// var hoisting(move declaration form bottom to top)
// 변수의 선언들은 다른 코드보다 먼저 처리 되기때문에
// 코드의 최상단에서 선언한 것과 동등하다
// 어디에 선언했는지에 상관없이 선언을 제일 위로 끌어 올림.
// block scope를 사용할 수 없음. 
{
    age=4;
    var age;
}
console.log(age);


//////////////////////////////////////////////////////////////////////////////////


// 3. constants(read only)
// use const whenever possible.
// only use let if variable needs to change
const daysInWeek = 7;
const maxNumber = 5;


//////////////////////////////////////////////////////////////////////////////////


// Note!
// favor immutable data type always for a few resons:
// - security
// - thread safety
// - reduce human mistakes

// Immutable data types: primitive types, frozen objects(i.e. object.freeze())
// Mutabale data types: all objects by default are mutable in JS


///////////////////////////////////////////////////////////////////////////////////


// 4. Variable types
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
const bigInt = 1234567890123456789012345678901234567890n; //over (-2^53) ~ 2^53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;
console.log(Number.MAX_SAFE_INTEGER);

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

//null null이라는 empty값이 할당된 값임.
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined 선언은 되었지만 아무런 값이 지정되어있지 않은 상태임. 
// 텅텅비었는지 값이 들어갔는지 정해져 있지 않음 
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects 
//주어진 스트링에 상관없이 고유한 식별자를 만들때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

//스트링이 똑같다면 동일한 식별자를 만들고 싶을때 for사용
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const park = {name: 'park', age: 30};
park.age = 32;
console.log(`value: ${park.age}, type: ${typeof park.age}`);


//////////////////////////////////////////////////////////////////////////////////


//5. Dynamic typing: dynamically typed language
//프로그램 실행 시 변수의 타입이 정해짐.
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0)); //error 중간에 타입이 변해서 에러남.