"use strict";
// Create a class that gets an argument nickName and returns an object that has a property nickName and has a generic type of the argument it receive
class Gen {
    constructor(nickname) {
        this.nickname = nickname;
    }
}
let genericName = new Gen('george');
function genFunction(arg1) {
    return arg1;
}
let x = genFunction({ x: '2', y: '5' });
console.log(x);
const props = {
    name: 'george',
    lastName: 'giagkos',
    age: 29,
    sex: 'male',
};
function chooseType(key, value) {
    props[key] = value;
}
chooseType('name', 'george');
let myVar = 'george';
let secondVar;
