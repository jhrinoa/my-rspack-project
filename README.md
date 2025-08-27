# Rspack project code coverage issue demo

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get started

Start the dev server, and the app will be available at [http://localhost:8080](http://localhost:8080).

```bash
pnpm run dev
```

## How to reproduce the issue.
# Uncomment out `ModuleFederationPlugin` in [rspack.config.mjs](https://github.com/jhrinoa/my-rspack-project/blob/main/rspack.config.mjs)
# Restart the dev server
# Open a new terminal window and run:
```bash
pnpm run cypress:run
```