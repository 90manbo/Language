// 8. Conditional operators : if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('ellie');
}else if (name === 'coder'){
    console.log('coder');
}else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE' :
        console.log('go away');
        break;
    case 'Chrome' :
        case 'Firefox' :
        console.log('love you');
        break;
    default:
        console.log('same all');
        break;
    
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while ( i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
do { 
    console.log(`do while: ${i}`);
    i--;
}while (i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i> 0; i--){
    console.log(`for: ${i}`);
}

for(let i =3; i> 0; i= i-2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i = 0; i<10; i++){
    for(let j = 0; j<10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// continue
for(let i = 0; i<=10; i++){
    if(i % 2 !== 0){
        continue;
    }
    console.log(`i: ${i}`);
    
}

//break
for(let i = 0; i<= 10; i++){
    if(i > 8){
        break;
    }
    console.log(`i: ${i}`);
}