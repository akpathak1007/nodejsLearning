// This key word value is defined by the object before the (.) operator
const manager = {
  name: "Karina",
  age: 27,
  job: "Software Developer",
};

const intern = {
  name: "Tyrone",
  age: 21,
  job: "Software Engineer Intern",
};
// sayHi function using this keywork to console message
function sayHi() {
  console.log(`Hello, my name is ${this.name}`);
}
// Now after assigning sayHi to intern object it will access name property of
//intern object
intern.sayHi = sayHi;
// Now after assigning sayHi to intern object it will access name property of
// manager object
manager.sayHi = sayHi;
intern.sayHi();
manager.sayHi();
