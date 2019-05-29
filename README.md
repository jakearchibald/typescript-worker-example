Every time I use workers in a TypeScript project, I feel like I'm fighting it. This is me trying to figure out the *right* way to do it. I have not yet succeeded.

To try to build:

```sh
npm i
npm run build
```

I think the answer is somewhere in [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html), but I haven't figured it out yet.

# Issues

* In the root `tsconfig.json`, I have to tell it to ignore files in `dist`, else it drags them into the project. Surely I shouldn't have to do this?
* It doesn't like that I'm trying to reference types in `dedicated-worker` from `main`.
* It complains about `clients` in `src/service-worker/index.ts`, as it isn't using `Service​Worker​Global​Scope` as the global.
* It complains about `event.request` in `src/service-worker/index.ts`, as it isn't using the service worker types for `addEventListener`.
