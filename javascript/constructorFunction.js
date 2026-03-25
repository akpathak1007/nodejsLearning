function Person(name, age, address, state, city) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.state = state;
  this.city = city;
  this.fullAddress = function () {
    // Will be visiable in console
    return `${address} ${state} ${city} `;
  }; // it will take more memory beacuse this object have it own function
}
const manish = new Person(
  "Manish",
  25,
  "Niranjan puri",
  "Uttarpradesh",
  "Aligarh",
);
hello();
function hello() {
  console.log("hello");
}

hello();
Person.prototype.hasRelationship = function () {
  // will not visible
  if (this.name == "Manish") {
    return "Single";
  } else {
    return "Mingle";
  }
}; // I created object first and define fun later still it is available
const saurabh = new Person(
  "Saurabh",
  27,
  "Tedi Bagiya",
  "Uttarpradesh",
  "Agra",
);
console.log("Full address of manish", manish.fullAddress());
console.log("manish", manish, manish.hasRelationship());
console.log(
  "saurabh",
  saurabh.__proto__,
  saursalkdfajsldfjkabh.hasRelationship(),
);
