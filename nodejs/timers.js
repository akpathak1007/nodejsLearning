setTimeout(() => {
  console.log("SET TIMEOUT");
}, 0);

setImmediate(() => {
  console.log("SET-IMMDEDIATE");
});

/**
// Recursive setTimeout 
let count = 0;
function showNumber() {
  ++count;
  console.log(count);
  if (count < 5) {
    setTimeout(showNumber, 1000);
    return;
  }
}
setTimeout(showNumber, 1000);

// all way to schedule the task in event loop
setImmediate(() => {
  console.log("SET_IMMEDIATE");
});
const id = setInterval(() => {
  console.log("SET_INTERVAL");
  clearInterval(id);
}, 0);

setTimeout(() => {
  console.log("SET_TIMEOUT");
}, 0);
queueMicrotask(() => {
  console.log("QUEUE_MICRO_TASK");
});
process.nextTick(() => {
  console.log("NEXT_TICK");
});



// setInterval example with clearInterval 
let count = 0;
const timeoutInstance = setInterval(() => {
  ++count;

  if (count === 6) {
    console.log("Clearing setInterval after 5 run");
    clearInterval(timeoutInstance);
  } else {
    console.log("Function ran this time", count);
  }
}, 500);



// Zero Delay
console.log("EcmaScript module :-");
function greet() {
  console.log("Inside greet");

  process.nextTick(() => {
    console.log("process.nextTick");
  });

  queueMicrotask(() => {
    console.log("queueMicrotask");
  });

  setTimeout(() => {
    console.log("setTimeout");
  }, 0);

  console.log("Leaving greet");
}

greet();

console.log("Program finished");



// clearTimeout example
const timeoutInstance = setTimeout(() => {
  console.log("this should run after 2 sec.");
}, 2000);
setTimeout(() => {
  console.log("This is runing after 1 sec.");
  console.log("and cancelling 2 sec callback");
  clearTimeout(timeoutInstance);
}, 1000);


   import https from "https";
import { setTimeout as delay } from "node:timers/promises";

// setTimeout with callback
setTimeout(() => {
  console.log("Callback setTimeout");
  // Fetching data after 1 seccond
  https
    .get("https://jsonplaceholder.typicode.com/users", (res) => {
      let body = "";
      console.log("Fetching response CALLBACK");
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        body = JSON.parse(body);
        console.log(body[0]);
      });
    })
    .on("error", (err) => {
      console.log(err);
    });
}, 1000);

// Set timeout with promise
const fetchPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    https
      .get("https://jsonplaceholder.typicode.com/users", (res) => {
        let body = "";
        console.log("Fetching response PROMISE");
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          body = JSON.parse(body);
          resolve(body);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  }, 1000);
});
fetchPromise
  .then((data) => {
    console.log("setTimeout with Promise");
    console.log(data[1]);
  })
  .catch(console.log);
// setTimeout with async/await

async function fetchUsersWithDelay() {
  console.log("Async Function Started");
  await delay(1000);
  console.log("1 sec passed");
  let result = await fetch("https://jsonplaceholder.typicode.com/users");
  result = await result.json();
  console.log("Fetching response ASYNC/AWAIT", result[2]);
}
await fetchUsersWithDelay();
*/
