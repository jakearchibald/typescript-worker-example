// This file must have DOM types, but not worker types.
console.log(document);

// Assume a bundler puts 'worker.js' in the right place
const worker = new Worker('worker.js');

worker.onmessage = (event) => {
  // Ideally, I should be able to reference types from the worker:
  const data = event.data as import('../dedicated-worker').HelloMessage;
  console.log(data.hello);
};

// Assume a bundler puts 'sw.js' in the right place.
navigator.serviceWorker.register('sw.js');
