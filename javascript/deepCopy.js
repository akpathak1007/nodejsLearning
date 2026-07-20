/** this version only accept object as argument
    limitation is we can not pass array, string, number etc */

function deepCopy(obj) {
  const keys = Object.keys(obj);
  const clone = {};
  for (let key of keys) {
    const isObjectLiteral =
      typeof obj[key] === "object" && !Array.isArray(obj[key]);
    const isArray = Array.isArray(obj[key]);
    if (obj[key] === null) {
      clone[key] = null;
      continue;
    }
    if (isObjectLiteral) {
      clone[key] = deepCopy(obj[key]);
      continue;
    }
    if (isArray) {
      let cloneArray = [];
      for (let i of obj[key]) {
        cloneArray.push(deepCopy(i));
      }
      clone[key] = cloneArray;
      continue;
    }

    clone[key] = obj[key];
  }
  return clone;
}

const obj = {
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
const shellowCopy = obj;
const clone = deepCopy(obj);
shellowCopy.address.city = "Delhi";
shellowCopy.company = "xyz";

console.log(clone, obj === clone, shellowCopy === obj);
