// Class
// - template
// - declare once
// - no data in

// Object
// - instance of a class
// - created many times
// - data in

'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance
// 완전히 새로운 것이 아닌, 기존에 존재하던 프로토 타입인 것에 기반하여 문법이 추가 되었다.

// 1. Class declaration
class Persion {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Persion('ellie', 30);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if(value < 0){
            throw Error('age can not be negative');
        }
        this._age = value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);