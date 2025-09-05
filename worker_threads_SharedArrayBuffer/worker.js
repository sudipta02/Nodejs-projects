const { workerData, parentPort } = require('worker_threads');

// Create a typed array view from the received shared buffer
const sharedArray = new Int32Array(workerData);

console.log('Worker thread - Received shared value:', sharedArray[0]);

// Perform a large number of atomic additions to the shared memory
for (let i = 0; i < 10000; i++) {
  Atomics.add(sharedArray, 0, 1); // Safely increments the value
}

console.log('Worker thread - Finished additions.');

// The worker can send a message back to the main thread
parentPort.postMessage('Worker finished');