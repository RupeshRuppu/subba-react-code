function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.getNameAge = function () {
	return `name: ${this.name}, age: ${this.age}`;
};

const p1 = new Person('rupesh', 22);
const p2 = new Person('subba', 20);
console.log(p1.getNameAge());
console.log(p2.getNameAge());

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getNameAge() {
		return `name: ${this.name}, age: ${this.age}`;
	}
}

class Male extends Person {
	constructor(name, age) {
		super(name, age);
		this.gender = 'M';
	}
}

const m = new Male('rupesh', 22);
console.log(m.name, m.age, m.gender);
console.log(m.getNameAge());

class Female extends Person {
	constructor(name, age) {
		super(name, age);
		this.gender = 'F';
	}
}
const f = new Female('riya', 22);
console.log(f.name, f.age, f.gender);
console.log(f.getNameAge());
