// Extends and Inheritance
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  toString() {
    return this.#values.join();
  }
  get red() {
    return this.#values[0];
  }
  set red(value) {
    this.#values[0] = value;
  }
  static isValid(r, g, b) {
    const check = (value) => {
      return 0 <= value && 255 >= value;
    };
    return check(r) && check(g) && check(a);
  }
}
class AlphaColor extends Color {
  #alpha;
  constructor(r, g, b, a) {
    super(r, g, b);
    this.#alpha = a;
  }
  get alpha() {
    return this.#alpha;
  }
  set alpha(value) {
    this.#alpha = value;
  }
  toString() {
    return `${super.toString()},${this.#alpha}`;
  }
}
const redAlpha = new AlphaColor(255, 0, 0, 1);
console.log(redAlpha.red);
console.log(redAlpha.alpha);
console.log(redAlpha.toString());
/*
// Static Fields & Static Initialization block
class Color {
  static isValid(r, g, b) {
    const check = (value) => {
      return 0 <= value && 255 >= value;
    };
    return check(r) && check(g) && check(b);
  }
  // This block will be called when file will be first load
  static {
    console.log(Date());
  }
}
console.log(Color.isValid(119, 90, 90));
*/
/**
// Public fields
class MyClass1 {
  luckyNumber = Math.random();
}

class MyClass2 {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
const obj1 = new MyClass1();
const obj2 = new MyClass2();

console.log("Outside constructor", obj1.luckyNumber);
console.log("Second Class inside constructor", obj2.luckyNumber);
*/
/**
// Accessor Fields
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  get red() {
    return this.#values[0];
  }
  set red(x) {
    this.#values[0] = x;
  }
  // Now green is read only property
  // If you assign to green it will throw error
  get green() {
    return this.#values[1];
  }
}
const red = new Color(255, 4, 0);
console.log("The value of red", red.red);
red.red = 98;
console.log("The value of red after settin new", red.red);
console.log("The value of green", red.green);
red.green = 80; // In strict mode it will throw error
*/

/**
// Pirvate Fields
class Color {
  // Declare: every color instance has a private field called #values
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    if (value < 0 || value > 255) {
      throw new RangeError("Invalid R value");
    }
    this.#values[0] = value;
  }
  redDifference(anotherColor) {
    // #values doesn't necessarily need to be accessed from this
    // You can access private fields of other instance belonging
    // to the same class
    return this.#values[0] - anotherColor.#values[0];
  }
}
const red = new Color(255, 0, 0);
const crimson = new Color(220, 0, 0);
console.log("Value of red", red.getRed());
console.log("Red value diff b/w red and crimson", red.redDifference(crimson));
//Throw an RangeError
//red.setRed(1999);
//SyntaxError: Private field '#values' must be declared in an enclosing class
//console.log(red.#values);
*/
/**
   ## RESULT ##
   Value of red 255
   Red value diff b/w red and crimson 35 */

/**
 // Instance Methods
// Methods will be defined in prototype
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
}
const color = new Color(255, 0, 0);
console.log(color.getRed());
// This with defining method in constructor that each instance have
//its own funciton even though they are doing same thing.
class Color1 {
  constructor(r, g, b) {
    this.values = [r, g, b];
    this.getRed = function () {
      return this.values[0];
    };
  }
}
const obj1 = new Color(255, 0, 0);
console.log(obj1.getRed());
*/
/**
class Color {
  constructor(r, g, b) {
    // Assign the RGB values as a property of `this`
    this.values = [r, g, b];
  }
}
const red = new Color(255, 0, 0);
console.log(red);
// Same sitation with function
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
//  ## RESULT ##
// Color { values: [ 255, 0, 0 ] }

// All thing used with funciton can be used with constructor
class Color1 {
  // Rest operator
  constructor(...values) {
    this.values = values;
  }
}
// Do not return anything from constructor
// It automatically return the value of this
class MyClass {
  constructor() {
    this.myField = "foo";
    return {};
  }
}
console.log(new MyClass().myField);
//  ## RESULT ##
// undefined
*/

/**
 // Class Expressions
const MyClass = class{
// Class body
}
const Myclass = class MyClassLongerName{
    // Class body.
    // here MyClass and MyClassLongerName point to the same class
    // MyClassLongerName only can be used in class body
}
new MyClassLongerName() // ReferenceError: MyClassLongerName is not defined
*/

/**
 // Class can not hoisted
// Object of a class can not be created before its declaration
const obj = new MyClass();
class MyClass {}
*/

/**
 // DECLARING A CLASS WITH FUNCTION CONSTRUCTOR
function MyClass(){
    this.myField = 'foo';
    // Constructor body
}
MyClass.myStaticField = 'bar';
MyClass.myStaticMethod = function(){
// myStaticMethod body
}
MyClass.prototype.myMethod= function(){
// myMethod body
}
(function(){
//Static initialization code
})();
// Private fields and methods are new fetature in class with no trivial equivalent
// in function constructor

*/

/**
// DECLARING A CLASS
class myClass {
  // Constructor
  construction() {
    // Constructor Body
  }
  // Field, method, static fields, and static methods all have private forms
  #myPrivateField = "bar";
  // Instance Field
  myField = "foo";
  // Instance Method
  myMethod() {
    // myMethod Body
  }
  // Static Field
  static myStaticField = "bar";
  // Static Methods
  static myStaticMethod() {
    // myStaticMethod body
  }
  // Static block
  static {
    // Static Initialization code
  }
}
*/
