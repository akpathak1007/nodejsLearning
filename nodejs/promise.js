// example of queueMicrotask(), process.nextTick()
import fs from "node:fs/promises";
setImmediate(() => {
  console.log("BEFORE I/O SET IMMEDIATE");
});

//SET TIMEOUT - 5 mili seccond
setTimeout(() => {
  console.log("SET TIMEOUT 5 mili");
}, 5);
//SET TIMEOUT - 5 mili seccond
setTimeout(() => {
  console.log("SET TIMEOUT 3 mili");
}, 3);

//SET TIMEOUT - O SEC
setTimeout(() => {
  console.log("SET TIMEOUT");
}, 0);

// PROCESS NEXT_TICK OPERATION
process.nextTick(() => {
  console.log("NEXT TICK");
});
// PROMISE OPEATION 1
hello("Promise: before queueMicrotask and I/O").then(console.log);
// I/O operation
async function readFile() {
  const result = await fs.readFile("example.txt", "utf-8");
  return result;
}
readFile()
  .then((v) => console.log("Read File I/O - ", v))
  .catch(console.log);
// SET IMMEDIATE AFTER I/O
setImmediate(() => {
  console.log("AFTER I/O SET IMMEDIATE");
});
// QUEUE MICRO TASK
queueMicrotask(() => {
  console.log("this is queue micro task");
});
// SYNC OPETION 1
console.log("this is first sync");

// PROMISE OPEATION 2
hello("Promise: after queueMicrotask").then(console.log);
// PROMISE OPEATION 3
hello("PROMISE OPERATION 3").then(console.log);

// SYNC OPETION 1
console.log("this is second sync operation");

async function hello(name) {
  return name;
}

/**
// Promise.withResolvers() Example
const { promise, resolve, reject } = Promise.withResolvers();
setTimeout(() => {
  console.log("Resolving promise after 2 sec");
  resolve("Resolve Method: this promise is resovled after 2 sec");
}, 2000);
promise.then(console.log);


 // Promise.try() menthod EXAMPLE
function randomNumberLessThenHalf() {
  const num = Math.random();
  if (num < 0.5) {
    throw new Error("Value is less than .5");
  }
  return {
    error: false,
    message: "Value fetch succssfully.",
    data: num,
  };
}
Promise.try(randomNumberLessThenHalf)
  .then((v) => console.log("THEN BLOCK", v))
  .catch((err) => console.log("CATCH BLOCK", err.message));

  // Promise.resolve() and Promise.reject() methods Example
const resolve = Promise.resolve({
  type: "resolve",
  message: "This is resolved",
  error: false,
});

const reject = Promise.reject({
  type: "reject",
  message: "This is rejected",
  error: false,
});
resolve
  .then((value) => {
    console.log("this is in then", value);
  })
  .catch(console.log);

reject.then(console.log).catch((err) => {
  console.log("this is in catch block", err);
});


// Promise.any() method Example
import { setTimeout } from "node:timers/promises";,
const delay1 = setTimeout(1010).then((value) => {
  console.log("Delay1 one started");
  return {
    type: "delay1",
    data: "Delay1 promise ran",
  };
});

const delay2 = setTimeout(1000).then((value) => {
  console.log("Delay2 one started");
  return {
    type: "delay2",
    data: "Delay2 promise ran",
  };
});

const result = await Promise.any([delay1, delay2]);
console.log(result);
*/
