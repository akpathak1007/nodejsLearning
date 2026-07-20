// Passing a heavy task to nodejs worker using child_process's fork()
import { Worker } from "node:worker_threads";

const worker = new Worker("./workerThreadWork.js");
worker.postMessage({ parent: "workThread.js", iteratorValue: 1000000000 });
worker.on("message", (data) => {
  console.log("SUCCESS", data);
});
worker.on("error", (error) => {
  console.error("ERROR", error);
});
worker.on("exit", (code) => {
  if (code === 0) {
    console.log("Worker Thread Completed with code", code);
  } else {
    console.error("Worker Thread Failed with code", code);
  }
});
console.log("Main Thread Continue");
