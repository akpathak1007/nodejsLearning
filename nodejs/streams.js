import { pipeline } from "node:stream/promises";
import { Readable, Transform } from "node:stream";
await objectModeStream();
async function objectModeStream() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eve" },
    { id: 6, name: "Frank" },
    { id: 7, name: "Grace" },
    { id: 8, name: "Hank" },
    { id: 9, name: "Ivy" },
    { id: 10, name: "Jack" },
  ];

  let result = "";
  try {
    let errorCount = 0;
    if (!checkVisibilty(objectModeStream.name)) return;
    console.log("### Feeding object in stream ###");
    const readStream = Readable({
      objectMode: true,
      read() {
        this.push(users.pop());
        if (users.length === 0) {
          this.push(null);
        }
      },
    });
    const transform = Transform({
      objectMode: true,
      transform(value, encoding, cb) {
        value.name = value.name.toUpperCase();
        this.push(value);
        cb();
      },
    });
    console.log("Memeory", process.memoryUsage());
    const result = [];
    const writeStream = Transform({
      objectMode: true,
      transform(value, encoding, cb) {
        result.push(value);
        this.push(value);
        cb();
      },
    });
    await pipeline(readStream, transform, writeStream);
    console.log(result);
  } catch (err) {
    console.log(result, result.length);
    console.log("Error", err.message);
  }
}

import { fileURLToPath } from "node:url";
import fs from "node:fs";

await asyncIterablesAndPipline();
async function asyncIterablesAndPipline() {
  let result = "";
  try {
    let errorCount = 0;
    if (!checkVisibilty(asyncIterablesAndPipline.name)) return;
    const __filename = fileURLToPath(import.meta.url);
    console.log("### Async Iterable With Pipeline ###");
    const readableStream = fs.createReadStream(__filename, {
      highWaterMark: 1,
    });
    const writableStream = fs.createWriteStream("./pipelinestream.txt");
    async function* transform(source) {
      for await (const chunk of source) {
        yield chunk.toString().toUpperCase();
      }
    }
    await pipeline(readableStream, transform, writableStream);
  } catch (err) {
    console.log(result, result.length);
    console.log("Error", err.message);
  }
}

await asyncIterableStream();
async function asyncIterableStream() {
  let result = "";
  try {
    let errorCount = 0;
    if (!checkVisibilty(asyncIterableStream.name)) return;
    const __filename = fileURLToPath(import.meta.url);
    console.log("### Async Iterable Readable Stream ###");
    const readableStream = fs.createReadStream(__filename, {
      highWaterMark: 1,
    });
    for await (let chunk of readableStream) {
      errorCount++;
      if (errorCount === 100) {
        throw Error("100 Chunks already read");
      }
      result += chunk.toString();
    }
    console.log(str);
  } catch (err) {
    console.log(result, result.length);
    console.log("Error", err.message);
  }
}

//import { Transform, pipeline } from "node:stream";
pipelineMethodUse();
function pipelineMethodUse() {
  if (!checkVisibilty(pipelineMethodUse.name)) return;
  const __filename = fileURLToPath(import.meta.url);
  console.log("### Pipeline Method use ###");
  let errorCount = 0;
  const upper = new Transform({
    transform(data, enc, cb) {
      if (errorCount === 100) {
        return cb(new Error("BOOM!"));
      }
      errorCount++;
      this.push(data.toString().toUpperCase());
      cb();
    },
  });
  const readStream = fs.createReadStream(__filename, { highWaterMark: 1 });
  const writeStream = process.stdout;

  readStream.on("close", () => console.log("\nReadable Stream close"));
  upper.on("close", () => console.log("\nTransform Stream close"));
  upper.on("error", (err) => console.log("\nERROR IN TRANSFORM", err.message));
  writeStream.on("close", () => console.log("\nWrite Stream close"));
  pipeline(readStream, upper, writeStream, (err) => {
    if (err) {
      return console.error("Pipeline Error", err.message);
    }
    console.log("Pipeline Success");
  });
}

pipeMethodUse();
function pipeMethodUse() {
  if (!checkVisibilty(pipeMethodUse.name)) return;
  const __filename = fileURLToPath(import.meta.url);
  console.log("### Pipe Method use ###");
  // Creating a transform object
  let errorCount = 0;
  const upper = new Transform({
    transform(data, enc, cb) {
      if (errorCount === 100) {
        return cb(new Error("BOOM!"));
      }
      errorCount++;
      this.push(data.toString().toUpperCase());
      cb();
    },
  });
  const readStream = fs.createReadStream(__filename, { highWaterMark: 1 });
  const writeStream = process.stdout;
  readStream.pipe(upper).pipe(writeStream);

  readStream.on("close", () => console.log("\nReadable Stream close"));
  upper.on("close", () => console.log("\nTransform Stream close"));
  upper.on("error", (err) => console.log("\nERROR IN TRANSFORM", err.message));
  writeStream.on("close", () => console.log("\nWrite Stream close"));
}

import { Writable } from "node:stream";
import { once } from "node:events";
simpleWritableStream().then(console.log).catch(console.log);
async function simpleWritableStream() {
  if (!checkVisibilty(simpleWritableStream.name)) return;
  console.log("simple Writable stream ");
  class MyClass extends Writable {
    constructor(highWaterMark) {
      super({ highWaterMark });
    }
    _write(data, encode, cb) {
      process.stdout.write(data.toString().toUpperCase() + "\n", cb);
    }
  }
  const stream = new MyClass(10);
  for (let i = 0; i < 10; i++) {
    const stillWritable = stream.write("hello");
    if (!stillWritable) {
      console.log("Wait Draining !!");
      await once(stream, "drain");
    }
  }
  stream.end("Stream end");
  return "Function End";
}

//import { Readable } from "node:stream";
readableEventStreamWithFix();
function readableEventStreamWithFix() {
  if (!checkVisibilty(readableEventStreamWithFix.name)) return;
  console.log("\n Readable event issue fix in while loop");
  class MyStream extends Readable {
    #count = 0;
    _read(size) {
      process.nextTick(() => {
        this.push(":-)");
        if (++this.#count === 5) {
          this.push(null);
        }
      });
    }
  }
  const stream = new MyStream({
    highWaterMark: 1,
  });
  // readable event emits using process.nextTick()
  stream.on("readable", () => {
    console.count(">> readbale count");
    let chunk;
    while ((chunk = stream.read()) !== null) {
      console.log(chunk.toString());
    }
  });
  stream.on("end", () => console.log("stream end"));
  stream.on("close", (v) => console.log("Stream closed"));
}

readableEventStream();
function readableEventStream() {
  if (!checkVisibilty(readableEventStream.name)) return;
  console.log("\n Readable Stream Implementation for readable event");
  class MyStream extends Readable {
    #count = 0;
    _read(size) {
      this.push(":-)");
      if (++this.#count === 5) {
        this.push(null);
      }
    }
  }
  setImmediate(() => console.log("SET IMMEDIATE"));
  const stream = new MyStream({
    highWaterMark: 100000,
  });
  // readable event emits using process.nextTick()
  stream.on("readable", () => {
    console.count(">> readbale count");
    let chunk;
    while ((chunk = stream.read()) !== null) {
      console.log(chunk.toString());
    }
  });
  // By default ES modules are promise when they loaded
  // Micro task executed first
  Promise.resolve().then(() => console.log("PROMISE RESOLVED"));
  setTimeout(() => console.log("SET TIMEOUT"), 0);
  stream.on("end", () => console.log("stream end"));
  stream.on("close", (v) => console.log("Stream closed"));
}

// Readbale streams
readableStream();
function readableStream() {
  if (!checkVisibilty(readableStream.name)) return;
  console.log("\nSimple Readable Stream Implementation");
  class MyStream extends Readable {
    #count = 0;
    _read(size) {
      this.push(":-)");
      if (++this.#count === 5) {
        this.push(null);
      }
    }
  }
  const stream = new MyStream();
  stream.on("data", (chunk) => {
    console.log(chunk.toString());
  });
}

function checkVisibilty(funName) {
  const show = {
    readableStream: 0,
    readableEventStream: 0,
    readableEventStreamWithFix: 0,
    simpleWritableStream: 0,
    pipeMethodUse: 0,
    pipelineMethodUse: 0,
    asyncIterableStream: 0,
    asyncIterablesAndPipline: 0,
    objectModeStream: 1,
  };
  return show[funName];
}
