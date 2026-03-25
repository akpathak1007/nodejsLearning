// Defining Getter and setter while creating object
const myObject = {
  a: 7,
  get b() {
    return this.a * 99;
  },
  set c(x) {
    this.a = this.a * x - 2;
  },
};
console.log(myObject.a);
// before return the value of a, it will perform operator written in b function
console.log(myObject.b);
// before setting the value of a it will perform operation to modify result
myObject.c = 3;
console.log(myObject.a);
const object2 = {
  a: 0,
};
// Defining getter and setter after object creation
Object.defineProperties(object2, {
  b: {
    get() {
      return this.a + 14;
    },
  },
  c: {
    set() {
      this.a = this.a + 20;
    },
  },
});
console.log("Initial value of a", object2.a);
console.log("a value from getter method", object2.b);
object2.c = 7;
console.log("a value after setter is called", object2.a);
