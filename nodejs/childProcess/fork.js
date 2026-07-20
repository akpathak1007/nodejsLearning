// Passing a heavy task to nodejs worker using child_process's fork()
import { fork } from "node:child_process";

const child = fork("./forkWorker.js");
child.send({ parent: "fork.js", iteratorValue: 10000000000 });

child.on("message", (data) => {
  if (data.error) {
    console.error("ERROR", data);
  } else {
    console.log("SUCCESS", data);
  }
  process.exit();
});
