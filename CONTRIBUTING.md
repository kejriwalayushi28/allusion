# Contributing to Allusion

We ❤️ pull requests, bug reports and enhancement suggestions, here are our guidelines:

1. If filing a bug report, please verify the bug completely end-to-end and add enough description and environment details.
2. Working on an issue? File the bug at <https://github.com/csmadhav/allusion/issues/new> (if there
isn’t one already). If your new change is going to be large it might be a good idea
to get the discussion started early. We are happy to discuss it beforehand.
3. Make sure that all the pull requests and bug reports provide justification for why they should be merged.

## Setup From Source

To set up a working **development environment**, fork the repo and follow these instructions

Please note that these instructions are for setting a functional development environment. If you want to set up an Allusion instance to integrate into your app please go through [documentation](https://csmadhav.github.io/allusion/docs/what-and-how).

1. Clone the repo and create branch in `[tag]/#[issue number]-[very short description]` format.

2. Do `npm i && npm run dev`

After finishing the installation process, you can start writing and editing code.
we highly recommend vscode and the appropriate extensions, you can go ahead with TS, eslint and jest recommended extenstions and thats it your dev environment is ready!

## Build

To build a new version of the Allusion server, all you need to do is run the build like this:

```bash
npm run build # builds a `lib` folder which is published as an npm module.

npm run build:standalone # builds a dist folder where plain js bundle resides.
```

## Tests

Tests are Jest based and can be run directly like:

```bash
    npm run test
```

If you are using vscode, better to use jest extenstions to run or debug tests.

## Directory structure

```bash
├── CONTRIBUTING.md
├── README.md
├── coverage # coverage reports are generated here.
├── dist # bundles generated by `npm run build:standalone`.
├── docs # all the MDs related to docs goes here its used by docusaurus.
│   ├── api-references.md
│   ├── installation.md
│   └── what-and-how.md
├── jest.config.js # configuration for Jest
├── lib # generated by `npm run build`. This is for npm module.
├── logo.png # logo
├── package-lock.json # package lock file.
├── package.json # all scripts and dependencies are defined here.
├── src # complete source code.
│   ├── Allusion.ts # contains an `init` function which is the entry point.
│   ├── Environment.ts # Util class for just getting the env.
│   ├── QueueService.ts # Since we maintain a queue for all the events occuring on the DOM interactions to queue is handled by this class.
│   ├── Utilities.ts # Utilities class.
│   ├── __tests__ # all tests goes here.
│   │   ├── Allusion.spec.ts
│   │   ├── QueueService.spec.ts
│   │   ├── TestUtils.ts
│   │   └── Utilities.spec.ts
│   ├── app.js # entry point for a bundled js.
│   ├── events # all events should go here.
│   │   ├── AllusionErrorEvent.ts
│   │   ├── AllusionEvent.ts
│   │   ├── AllusionPromiseRejectionEvent.ts
│   │   ├── ChangeEvent.ts
│   │   ├── ClickEvent.ts
│   │   ├── LoadEvent.ts
│   │   └── XHRSentEvent.ts
│   ├── interfaces # all interfaces should go here.
│   │   ├── PushableEvent.ts
│   │   └── Queueable.ts
│   ├── resources # webpack dev server loads this website for testing purpose.
│   │   └── test-website
│   │       └── index.html
│   ├── types.ts
│   └── typings
│       └── global.d.ts
├── standalone.config.js # webpack config for build:standalone script.
├── tsconfig.json # TS config goes here.
└── website # docusaurus code goes here this is another npm project in itself go through docusaurus doc for this.
```

If you still have a doubt or want to discuss something drop a mail [here](mailto:madhav.allusionjs@gmail.com).

## The `trackingUrl` Endpoint

When user will integrate Allusion into his project he will provide the trackingUrl, however in dev environment we've used webpack-dev-server, We have exposed an endpoint `/track` which will be called if any error event occurs on the page. This is defined in webpack config `standalone.config.js`

## Sending a Pull Request

While sending PR, just make sure that:

* You add valid test cases (you can run them using `npm run test`).
* Tests are green.
* Check builds run successfully on your local (using `npm run build` and `npm run build:standalone`).
* Add appropriate documentation, we use [docusaurus.io](https://docusaurus.io/) and you can find the source under website dir.
