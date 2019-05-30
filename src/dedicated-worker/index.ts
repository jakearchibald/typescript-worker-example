// This file must have worker types, but not DOM types.
// The global should be that of a dedicated worker.

// This fixes `self`'s type.
declare var self: DedicatedWorkerGlobalScope;
export {};

const helloMessage = {
  hello: 'world',
};

export type HelloMessage = typeof helloMessage;

// Both of these should work.
postMessage(helloMessage);
self.postMessage(helloMessage);
