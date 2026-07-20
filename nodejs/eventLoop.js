// process.nextTick() and EventEmitter
import EventEmitter from "node:events";
class MyEvents extends EventEmitter {
  constructor() {
    super();
    process.nextTick(() => {
      this.emit("run");
    });
  }
}

const eventObj = new MyEvents();
eventObj.on("run", () => {
  console.log("I have emitted run event");
});

/**
// Throwing error after current execution is completed
// Understanding with process.nextTick()
import fs from "fs";
function readConfig(path, cb) {
  if (typeof path !== "string") {
    // CASE-1 It will run asynchronously before event loop starts
    return process.nextTick(cb, new Error("Path should be string"));
    // CASE-2 It is run synchronously before hanlerRun console.
    //    throw new Error("Path should be string");
    // CASE-3 we are expecting it async but it will run synchronously
    //    return cb(new Error("Path should be string"));
  }
  console.log("File is about to read");
  fs.readFile(path, cb);
}
let isSyncWorkCompleted = false;

readConfig(122, (err, data) => {
  if (err) {
    console.log("Is sync work completed", isSyncWorkCompleted);
    console.log("ERROR: ", err.message);
    return;
  }
  console.log("DATA", data);
});
console.log("handlerRun");
isSyncWorkCompleted = true;






// settimeout and setImmediate in I/O operation with definate order
import fs from "fs";
function readFile(path, cb) {
  const fileReadTime = Date.now();
  fs.readFile(path, "utf-8", cb);
}
const path1 = "./rough.txt";
readFile(path1, (err, data) => {
  setTimeout(() => {
    console.log("SET TIMEOUT 1 ");
  }, 0);

  setImmediate(() => {
    console.log("SET-IMMDEDIATE");
  });
  setTimeout(() => {
    console.log("SET TIMEOUT 2 ");
  }, 0);
});






// Timer and pool phase
import fs from "fs";
function writeFile() {
  let str = "";
  for (let i = 0; i < 10000000; i++) {
    str += i.toString() + ",";
  }
  fs.writeFile("rough.txt", str, (err, data) => console.log(data));
}
//writeFile();
function readFile(path, cb) {
  const fileReadTime = Date.now();
  fs.readFile(path, "utf-8", cb);
}

const timeStart = Date.now();
setTimeout(() => {
  const delay = Date.now() - timeStart;
  console.log("Timers run after delay of ", delay, "ms");
}, 100);

const fileReadStart = Date.now();
const path1 = "./rough.txt";
readFile(path1, (err, data) => {
  //console.log(data);
  console.log("File read done in ", Date.now() - fileReadStart, "ms");
  const currentTime = Date.now();
  while (Date.now() - currentTime < 400) {}
  console.log("Main Thread block for ", Date.now() - currentTime, "ms");
});
const path2Timer = Date.now();
readFile("./timers.js", (err, data) => {
  //const currentTime = Date.now();
  //  while (Date.now() - currentTime < 200) {}
  console.log("Path 2 read time", Date.now() - path2Timer, "ms");
});
setTimeout(() => {
  console.log("SET TIMEOUT 1 ");
}, 0);

setImmediate(() => {
  console.log("SET-IMMDEDIATE");
});
setTimeout(() => {
  console.log("SET TIMEOUT 2 ");
}, 0);
*/
