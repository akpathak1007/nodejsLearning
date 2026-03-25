import fsp from "fs/promises";
import fs from "fs";

// Creating a wrapper function with settimeout which reject process after given time

/**
   1. Create a function which create a file using stream and write 1 to 10_000_000 times in space in between " "
   2. create a promise which read file and replase space " " with new line \n.
   3. use settimeout funciton if it takes for then 5 seconds.
   4. after the timeout it retry reading file again from where it left.
   5. promise should retry until it whole file is read and space converted into new line
*/

/**
   ### TASK ###
   Create a function function read content from a file using stream. remember the success read byte position if it fails. resume reading from the same postion it failed
 */

/**
   ### TASK ###
   Function to create a file and write 0 to 10 millon with space " " in between
 */
async function createDumpFileUsingStream() {
  try {
    await fsp.mkdir("dump", { recursive: true });
    const stream = fs.createWriteStream("dump/streamFile.js");
    const totalIteration = 10_000_000;
    for (let i = 0; i < totalIteration; i++) {
      //    console.log("interation", i);
      if (!stream.write(i + " ")) {
        await new Promise((resolve) => {
          stream.once("drain", resolve);
        });
      }
    }
    stream.end();
    return "File created successfully";
  } catch (err) {
    console.log(err);
  }
}
/*
  createDumpFileUsingStream().then((r) => {
  console.log(r);
});
*/

/**
   ### TASK ###
    correct vertion of retry logic
    - Returning a promise is not need from return function as provided callback will return promise. we just to use catch or then
    - we should return the result while retrying calling retry_fucntion (otherwise it will result in floating promise)
 */
async function basicRetryPromiseCorrect(fn, retry) {
  return fn().catch((err) => {
    if (retry === 0) {
      return Promise.reject(new Error("Retry limit completed" + err.message));
    } else {
      console.log("Retry", retry);
      return basicRetryPromiseCorrect(fn, retry - 1);
    }
  });
}

basicRetryPromiseCorrect(() => {
  return new Promise((rs, rj) => {
    const check = false;
    if (check) {
      console.log("Correct version");
    } else {
      rj(new Error("Throwing my error"));
    }
  });
}, 3).catch((e) => console.log(e.message));

/**
   ### TASK ###
    My version of retry logic with promise */
async function basicRetryPromise(fn, retry) {
  return new Promise((rs, rj) => {
    try {
      return fn()
        .then(rs)
        .catch((err) => {
          console.log("Retry", retry);
          if (retry === 0) {
            console.log("Rejecting after retrying", err.message);
            throw err;
          } else {
            return basicRetryPromise(fn, retry - 1);
          }
        });
    } catch (err) {
      return rj(err);
    }
  });
}
/** 
basicRetryPromise(() => {
  return new Promise(() => {
    throw Error("My Error");
    console.log("this is success");
    return 5;
  });
}, 3)
  .then((v) => {
    console.log("I am inside then block");
  })
  .catch((err) => {
    console.log("I am in catch block of basic retry function");
    console.log(err.message);
  });
*/
