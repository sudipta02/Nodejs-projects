const { Worker } = require("worker_threads");

// Create a SharedArrayBuffer with a size of 1024 bytes
const sharedBuffer = new SharedArrayBuffer(1024);

// Create a typed array view to manipulate the buffer
const sharedArray = new Int32Array(sharedBuffer);

// Initialize the first element
sharedArray[0] = 0;
console.log("Main thread - Initial value:", sharedArray[0]);

// Spawn a worker thread and pass the shared buffer
const worker = new Worker("./worker.js", {
  workerData: sharedBuffer,
});

// Listen for the worker to finish
worker.on("message", (msg) => {
  console.log(msg);
  console.log("Main thread - Final value:", sharedArray[0]); // The change from the worker is visible
});
