import { spawn } from "node:child_process";

// For getting data in stdout
//const child = spawn("ffmpeg", ["-i", "input.mp4", "-f", "mp3", "-"]);

// output data into output.mp3 file
const child = spawn("ffmpeg", ["-i", "input.mp4", "output.mp3"]);
// Here ffmpeg sent actual data .
//which is in process so you can use it to pipe
// into other task
child.stdout.on("data", (data) => console.log(data));
// ffmpeg writes it process and status info to stderr not stdout
//this is just ffmped own convention
child.stderr.on("data", (data) => console.log(data));
child.on("close", (code) => {
  if (code === 0) {
    console.log("Process Exit: Conversion successed.");
  } else {
    console.error("Process Exit with error code", code);
  }
});
child.on("error", (error) => {
  // Fires it when process itself couldn't even be spawned
  // err: ffmpeg is not isntalled, path is wrong
  console.error("Failed to start ffmpeg");
});

/**
// Lerning Closure

// A closure is a function that is defined inside another function and retains a reference to the variable in its out lexical scope, event after outer funciton has return.
// Lexical Soce - it means that accessibilty of veribale is determined by where function and veriable are written in the source code, not by where they are called at run time.

// Finding average - sync function event event loop will be block
const n = 999999;
function avgSync(n) {
  let start = Date.now();
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  const result = sum / n;
  return { avg: sum / n, time: (Date.now() - start) / 1000 };
}

// Now we will create a async function which will
// pass operation to eventloop using setImmediate
// after each 5000 operation else it will calculate
// synchronously
function fastAvgAsync(n, cb) {
  let sum = 0;
  let i = 0;
  const chunk = () => {
    let end = Math.min(i + 5000, n + 1);
    while (i < end) {
      sum += i++;
    }

    if (i <= n) {
      setTimeout(chunk);
    } else {
      //      console.log("value of i", i);
      cb({ sum, i, n });
      return;
    }
  };
  chunk();
}
// Finding average till n - async function
// Very slow beacuse for each iteration it is setting setImmediate which
// costly in terms of register callback, set timer,  event loop to check
// agian and again check phase, back to nodejs and callstack
function avgAsync(n, cb) {
  let sum = 0;
  const asyncSum = (i, cb) => {
    sum += i;
    if (i == n) {
      cb(sum);
      return;
    }
    setImmediate(asyncSum.bind(null, i + 1, cb));
  };
  asyncSum(1, cb);
}

// Calling all above function
console.log("START RUNNING");
console.log("SYNC AVG RESULT", avgSync(n));
const fastAsync = Date.now();
fastAvgAsync(n, (obj) => {
  console.log(
    "FAST ASYNC RESULT",
    obj.sum / n,
    (Date.now() - fastAsync) / 1000,
  );
});
const slowAsync = Date.now();
avgAsync(n, (sum) => {
  console.log("SLOW ASYNC RESULT", sum / n, Date.now() - slowAsync);
});
console.log("END RUNNING");






// Finding average - sync function
let start = process.hrtime();
console.log("console.log calucations start");
function avgSync(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum / n;
}
console.log(
  "Time taken- calcuation end",
  avgSync(10000000000),
  process.hrtime(start)[0],
);
console.log("THE LAST LOG");


//  Broken Interview Qestion
// Here var i is not block scope so in our callback console i variable is pointing to a same variable. After loop is finished (sync) i value will be 3 and our callback prints that value
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
// Correct - Here i a block scope veriable, in each iteration our closure is getting a new i variable with different value
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}



// basic example
function outerFun() {
  let count = 0;
  console.log("Outer function run");
  const innerFun = () => {
    const result = ++count;
    console.log("Inner funciton run", result);
    return result;
  };
  return innerFun;
}

const inner = outerFun();
console.log(inner());
console.log(inner());
console.log(inner());
console.log(inner());
*/
