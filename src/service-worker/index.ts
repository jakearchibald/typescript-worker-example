// This file must have worker types, but not DOM types.
// The global should be that of a service worker.

// Ugh, you have to do this, and use `global.whatever` rather than `whatever`.
const global = self as ServiceWorkerGlobalScope;

console.log(global.clients);

global.addEventListener('fetch', (event) => {
  console.log(event.request);
});
