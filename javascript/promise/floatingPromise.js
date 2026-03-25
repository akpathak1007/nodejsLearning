// Using async await

// Floating promise
function calculateSum(x) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number") {
      reject(new Error("Value is not integer" + x));
    }
    const newValue = x * x;
    resolve(newValue);
  });
}

calculateSum(5)
  .then((value) => {
    console.log("Independend 5", value);
    // now inner promise is floating promise
    /**
      calculateSum(10).then((value) => {
      console.log("Inner then chain", value);
    });

    */
    // to correct it
    // note it is returning a promise in this case it will be evaluated after currect event loop cycle is completed
    return calculateSum(10);
  })
  .then((value) => {
    console.log("Second then", value * value);
  });

calculateSum("this is minal")
  .then((value) => {
    console.log("then block", value);
  })
  .catch((err) => console.log("catch block", err));

calculateSum("address is wrong")
  .then((value) => {
    console.log("then block", value);
  })
  .catch((err) => console.log("catch block", err));

calculateSum(40)
  .then((v) => {
    console.log("Independend 40", v);
    return calculateSum(11);
  })
  .then((v) => {
    console.log("Second then inside 40 value 11", v);
    return calculateSum("inside 40 passing string");
  })
  .then((v) => {
    console.log(" third then insdie 40 value 12", v);
    return calculateSum(12);
  })
  .catch(console.log);
calculateSum(55)
  .then((v) => {
    console.log("independent 55", v);
    return calculateSum(59);
  })
  .then((v) => {
    console.log(" second then insdie 55 value 59", v);
    return calculateSum(60);
  })
  .then((v) => {
    console.log(" thrid then insdie 55 value 60", v);
    return calculateSum("inside 55 passing string");
  })
  .catch(console.log);
