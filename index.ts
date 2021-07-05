// Import in index.ts
import { greetings } from './helpers';

greetings<string>('hello');
greetings<number>(2);

// Create an interface for the Person class
interface PersonClass {
	firstName: string;
	lastName: string;
}

// Create a class Person that takes 3 arguments, id, firstName, lastName
class Person implements PersonClass {
	firstName: string;
	lastName: string;

	// Make id static
	static id: string;

	constructor(firstName: string, secondName: string) {
		this.firstName = firstName;
		this.lastName = secondName;
	}
	// Create a method that takes in an argument and returns the same type
	printType<Type>(arg: Type): Type {
		return arg;
	}
}

// Create an child class Male
class Male extends Person {}

let person = new Person('george', 'geo');
// let printValue = person.printType('return message');
person.printType('2');
