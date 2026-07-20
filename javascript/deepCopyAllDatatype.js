/** this version only accept object as argument
    limitation is we can not pass array, string, number etc */
let count = 0;
function deepCopy(obj) {
  ++count;
  let clone = null;
  // If obj is null
  if (obj === null) {
    return clone;
  }
  const getKeys = (obj) => {
    return Object.keys(obj);
  };
  // check if argument is Premetives, Array, Object
  if (Array.isArray(obj)) {
    clone = obj.map((value) => {
      return deepCopy(value);
    });
    return clone;
  }
  if (typeof obj === "object" && !Array.isArray(obj)) {
    clone = {};
    const objKeys = getKeys(obj);
    for (let i of objKeys) {
      if (typeof obj[i] === "object") {
        clone[i] = deepCopy(obj);
      }
      clone[i] = obj[i];
    }
    return clone;
  }
  clone = obj;
  return clone;
}
let str = "Midnal";
let num = 3;
let nullObj = null;
let arr = ["Anuj", "Kumar", "Pathak"];
let obj = {
  city: "Aligarh",
  pin: 202001,
  streetNo: 6,
  state: "UP",
  add: "Dorinagar",
};
const nestedObj = {
  name: "Anuj Pathak",
  age: 21,
  address: {
    city: "Aligarh",
    pin: 202001,
    streetNo: 6,
    state: "UP",
    add: "Dorinagar",
  },
};
const deepNestedObject = {
  name: "Anuj Pathak",
  age: 21,
  friends: ["Manish", "Saurabh"], //
  company: null,
  address: {
    city: "Aligarh",
    pin: 202001,
    streetNo: 6,
    state: "UP",
    add: "Dorinagar",
  },
  education: [
    {
      degree: "10th",
      noOfYears: 1,
      complitionYear: 2014,
      subjects: [
        { name: "english", session: "first half" },
        { name: "hindi", session: "second half" },
        { name: "math", session: "first half" },
      ],
    },
    { degree: "12th", noOfYears: 1, complitionYear: 2016 },
    { degree: "Politecnic", noOfYears: 1, complitionYear: 2020 },
  ],
};
// testing string
const cloneStr = deepCopy(str);
str = "Udpated Midnal";
console.log("\n Clone Str", cloneStr, str);
// testing num
const cloneNum = deepCopy(num);
num = 4;
console.log("\n Clone Number", cloneNum, num);
// testing array of premitives
const cloneArr = deepCopy(arr);
arr.push("updated");
console.log("\n Clone Array", cloneArr, arr);

// testing Object
const cloneObj = deepCopy(obj);
obj.updatedProp = "Updated Prop";
console.log("\n Clone Object", cloneObj, obj);

/**
const shellowCopy = obj;
const clone = deepCopy(obj);
shellowCopy.address.city = "Delhi";
shellowCopy.company = "xyz";
*/
//console.log(clone, obj === clone, shellowCopy === obj);
