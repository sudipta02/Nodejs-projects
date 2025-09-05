const { parentPort } = require("worker_threads");

//Simulating CPU-heavy computation
let result = 0;
for (let i = 0; i < 1e9; i++) {
  result++;
}

parentPort.postMessage(result);
