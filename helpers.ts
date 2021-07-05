// Create a function in helpers.ts, that takes an argument and returns a value of the same type

// Call it and restrict it to either a string or a number
export function greetings<Type>(message: Type): Type {
	return message;
}
