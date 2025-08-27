# Rspack project code coverage issue demo

## Setup

Install the dependencies:

```bash
pnpm install
```

Install cypress if you haven't.
```bash
pnpm cypress install
```

## Expected result

Start the dev server, and the app will be available at [http://localhost:8080](http://localhost:8080).

```bash
pnpm run dev
```

Run the cypress e2e test and see it passes.

```bash
pnpm run cypress:run
```


## How to reproduce the issue.
1. Uncomment out `ModuleFederationPlugin` in [rspack.config.mjs](https://github.com/jhrinoa/my-rspack-project/blob/main/rspack.config.mjs)
2. Restart the dev server
3. Run the cypress e2e test and see it fails this time.
```bash
pnpm run cypress:run
```
4. You can see better error information when you use `cypress:open` that opens UI.
```bash
pnpm run cypress:open
```
5. Run the test `spec.cy.js` and see the error when it tries to write report.


## Source of the issue.
As you can see from the page itself, when ModuleFederation plugin is used, it adds an empty string as a key to `window.__coverage__`. This causes cypress to throw an error when trying to write the report because it expects the keys to be strings that represent file paths.

Please note that I am not even importing remote modules in this test setup, but it still creates an empty path key which causes an error.

## Notes
This issue doesn't happen when I use `webpack` instead of `rspack`. I used exact same version with `swc-loader` and same `swc-plugin-coverage-instrument` plugin. So, this issue looks like an issue from `rspack`. My guess is that it's coming from `builtin:swc-loader` that `rspack` uses.

## Workaround
`swc-plugin-coverage-instrument` provides a way to exclude paths from being instrumented. You can use this to exclude the empty path key by adding the following to your `rspack.config.mjs`.
