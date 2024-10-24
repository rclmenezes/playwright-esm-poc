# playwright-esm-poc

Here to replicate [ESM import problems in Playwright](https://github.com/microsoft/playwright/issues/17075).

Use `pnpm install` and `pnpm test` to see this error:

```
% pnpm test

> playwright-esm-poc@1.0.0 test /Users/rmenezes/code/playwright-esm-poc
> playwright test

Error: Cannot find module '/Users/rmenezes/code/playwright-esm-poc/node_modules/next/headers' imported from /Users/rmenezes/code/playwright-esm-poc/tests/test.spec.ts
Did you mean to import "next/headers.js"?

Error: No tests found

To open last HTML report run:

  pnpm exec playwright show-report

 ELIFECYCLE  Test failed. See above for more details.
```
