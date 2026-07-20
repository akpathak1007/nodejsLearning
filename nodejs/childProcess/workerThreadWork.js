// Fork worker that will do some heavy and blocking task
import { parentPort } from "node:worker_threads";
import { performance as pref } from "node:perf_hooks";
parentPort.on("message", (data) => {
  pref.mark("start");
  const { parent, iteratorValue } = data;
  if (!parent || !iteratorValue) {
    throw new Error("Invalid value of parent and iteratorValue");
  }
  let sum = 0;
  for (let i = 0; i < iteratorValue; i++) {
    sum += i;
  }
  pref.mark("end");
  pref.measure("worker", "start", "end");
  const performance = pref.getEntriesByName("worker")[0];
  let duration = performance.duration;
  let unit = duration >= 1 ? "sec" : "ms";
  duration = duration >= 1 ? duration / 1000 : duration;
  duration = duration.toFixed(2);
  parentPort.postMessage({
    error: false,
    message: "Evalucation completed",
    data: {
      duration: duration.toString() + " " + unit,
      iteration: iteratorValue,
      sum,
    },
  });
  parentPort.close();
});
