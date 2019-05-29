// This file must have worker types, but not DOM types.
// The global should be that of a service worker.

console.log(clients);

addEventListener('fetch', (event) => {
  console.log(event.request);
});
