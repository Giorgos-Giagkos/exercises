class Point {
	x!: number;
	y!: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;

console.log(`${pt.x}, ${pt.y}`);

class GoodGreeter {
	constructor(public name: string = '2') {
		//   this.name = "hello";
		name = '1';
	}
}

class OKGreeter {
	// Not initialized, but no error
	name!: string;
}

class Base {
	k = 4;
}

class Derived extends Base {
	constructor() {
		super();
		console.log(this.k);
	}
}

class Point2 {
	x = 10;
	y = 10;

	scale(n: number): void {
		this.x *= n;
		this.y *= n;
	}
}

class C {
	_length = 0;
	get length() {
		return this._length;
	}
	set length(value) {
		this._length = value;
	}
}

let xa = new C();
xa._length = 2;
xa.length = 3;

interface Pingable {
	ping(): void;
}

class Sonar implements Pingable {
	ping() {
		console.log('ping!');
	}
}

class Animal {
	move() {
		console.log('Moving along!');
	}
}

let animal = new Animal();
animal.move();

class Box<Type> {
	contents: Type;
	constructor(value: Type) {
		this.contents = value;
	}
}

const b = new Box<number>(2);
const bc = new Box('2');

class GetThis {
	constructor(public _x: number, public y: string) {}

	get x() {
		return this._x;
	}

	set x(value) {
		if (value < 0) throw new Error('no value less than zero');

		this.x = value;
	}
}

let getThis = new GetThis(1, '2');
getThis.x = 4;
