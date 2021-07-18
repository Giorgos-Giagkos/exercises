// Create a class that gets an argument nickName and returns an object that has a property nickName and has a generic type of the argument it receive

class Gen<nameType> {
	constructor(public nickname: nameType) {}
}

let genericName = new Gen<string>('george');

// Create a generic function that takes 2 arguments of generic type and returns them as properties of an object. Then create an interface and extend the return

interface GenericFun {
	x: string;
	y: string;
}

function genFunction<Type extends GenericFun>(arg1: Type): Type {
	return arg1;
}

let x = genFunction({ x: '2', y: '5' });
console.log(x);
// let x: GenericFun = genFunction({x:'2',y:"2"})

// Create an interface of 4 properties. Then create a function that takes an argument and it's type can only be one of those properties

interface Props {
	name: string;
	lastName: string;
	age: number;
	sex: string;
}

const props: Props = {
	name: 'george',
	lastName: 'giagkos',
	age: 29,
	sex: 'male',
};

function chooseType<k extends keyof Props>(key: k, value: Props[k]) {
	props[key] = value;
}

chooseType('name', 'george');

// Create an interface that dynamically can take as many properties as you want and the values must either be a string or a number

interface MyInterface {
	[name: string]: string | number;
}

// Create an interface with properties of name, age, doYouLikeTheSummer. Then set a variable to be the type of name or age. Then create an other variable that it's type can be either of the 3

interface Properties {
	name: string;
	age: number;
	doYouLikeTheSummer: boolean;
}

let myVar: Properties['name' | 'age'] = 'george';
let secondVar: Properties[keyof Properties];
