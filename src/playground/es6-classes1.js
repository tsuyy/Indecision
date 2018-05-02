class Person {
  constructor( name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `wassup my name is ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let desc = super.getDescription();

    if(this.hasMajor()) {
      desc += ` and majors in ${this.major}.`;
    }

    return desc;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if(this.homeLocation) {
      greeting += ` and I'm visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const jane = new Student('Jane', 29, 'Aerospace');
const hodor = new Traveler('Hodor', undefined, 'Winterfell');
const anon = new Student();

console.log(jane.getDescription());
console.log(anon.getDescription());
console.log(hodor.getGreeting());
