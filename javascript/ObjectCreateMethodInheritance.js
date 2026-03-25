// Creating a object using Object.create() | Inheritance
const person1 = {
  name: "Manish",
  age: 26,
  job: "Civil Service",
  address: "Niranjanpuri",
  city: "Aligarh",
  state: "Uttar Pradesh",
  ashique: true,
};

// animal object inherit property of person1
// prototype of animal object is person1
const animal = Object.create(person1);

console.log("ANIMAL", animal);
console.log("Access Prototype property name", animal.name);
console.log("Prototype Object of animal", animal.__proto__);
