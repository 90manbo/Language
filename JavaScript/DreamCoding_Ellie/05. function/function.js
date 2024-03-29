// Function
// - fundemental building block in the program
// - subprogram can be used multiple times 재사용의 장점
// - performs a task or calculates a value 한가지의 일 또는 값을 계산

// 1. Function declaration
// function name(param1, param2) { body.. return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello(){
    console.log('hello');
}
printHello();

function log(message){
    console.log(message);
}
log('hello@');
log(1234);



// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie);



// 3. Default parameters (added in ES6)
function showMessage(message, from='unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi');



// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i =0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));    
}
printAll('dream', 'coding', 'ellie');



// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello2';
    }
    //console.log(childMessage); //error
}
printMessage();



// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);



// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if(user.point > 10){
        //long upgrade logic .. 
    }
}
//good
function upgradeUser(user) {
    if(user.point <= 10){
        return;
    }
    //long upgrade logic .. 
}

//////////////////////////////////////////////////////////////////////////////////


// First-class function
// functions are treated like any ohter variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expresstion is created when the execution reaches it.
const print = function() { //anoymous function 
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('yes');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no');
   // print();
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anoymous
const simplePrint = function () {
    console.log('simplePrint');
};
const simplePrint2 = () => console.log('simplePrint');

const add = function(a, b) {
    return a + b;
}
const add2 = (a, b) => a + b; // 한 줄에서는 리턴문 없어도 가능
const simpleMultiply = (a, b) => { //여러 줄일때는 리턴문 필요
    //do something more
    return a * b;
}; 

// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();