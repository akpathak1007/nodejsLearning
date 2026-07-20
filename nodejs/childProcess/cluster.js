// Creating cluster accross multiple CPU core for scaling
import cluster from "node:cluster";
import { availableParallelism } from "node:os";
import http from "node:http";

if (cluster.isPrimary) {
  const numCpu = availableParallelism();
  for (let i = 0; i < numCpu; i++) {
    console.log("Cluster created", i);
    cluster.fork();
    cluster.on("exit", (worker, code, signal) => {
      if (worker.exitedAfterDisconnect) {
        // A voluntary exit (e.g. worker.disconnect(),
        //or cluster.disconnect())
        return;
      }
      console.log(`Worker ${worker.process.pid} died, restarting`);
      cluster.fork();
    });
  }
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Handled by worker " + process.pid);
    })
    .listen(3000);
}
