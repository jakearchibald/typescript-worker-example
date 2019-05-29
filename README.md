Every time I use workers in a TypeScript project, I feel like I'm fighting it. This is me trying to figure out the *right* way to do it. I have not yet succeeded.

To try to build:

```sh
npm i
npm run build
```

I think the answer is somewhere in [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html), but I haven't figured it out yet.

# Issues

* Build fails with `error TS2318: Cannot find global type 'Array'`, but doesn't point to where this error is coming from.
* VSCode complains about `postMessage` in `src/dedicated-worker/index.ts`, as it's assuming `Window.prototype.postMessage`.
* VSCode complains about `src/dedicated-worker/tsconfig.json`. The error is `error TS2318: Cannot find global type 'Array'`.
* VSCode complains about `clients` in `src/service-worker/index.ts`, as it isn't using `Service​Worker​Global​Scope` as the global.
* VSCode complains about `event.request` in `src/service-worker/index.ts`, as it isn't using the service worker types for `addEventListener`.
