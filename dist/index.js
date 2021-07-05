"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import in index.ts
const helpers_1 = require("./helpers");
helpers_1.greetings('hello');
helpers_1.greetings(2);
// Create a class Person that takes 3 arguments, id, firstName, lastName
class Person {
    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.lastName = secondName;
    }
    // Create a method that takes in an argument and returns the same type
    printType(arg) {
        return arg;
    }
}
// Create an child class Male
class Male extends Person {
}
let person = new Person('george', 'geo');
// let printValue = person.printType('return message');
person.printType('2');
