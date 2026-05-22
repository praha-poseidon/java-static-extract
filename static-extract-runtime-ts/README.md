# Static Extract TypeScript Runtime

This module is the TypeScript runtime home for Static Extract.

It owns TypeScript-family parsing, TypeScript-family built-in rules, and the
`static-extract-ts` CLI. It must implement the shared contracts under `spec/`
directly in TypeScript; it must not depend on the Java core jar.

Current status: React/TS extraction for button text and frontend API calls. The
CLI can run SER rules that use `find jsx button`, `find call fetch`, and
`find call axios`, then write extracted facts as JSONL.

## Layout

```text
bin/static-extract-ts.mjs
  Runnable CLI shim.

src/contracts.ts
  TypeScript representation of the shared JSON output contract.

src/runtime.ts
  Runtime API placeholder for future TS/Vue/React extractors.

rules/
  Built-in rules owned by this runtime.
```

## Commands

```bash
npm test
node bin/static-extract-ts.mjs --help
node bin/static-extract-ts.mjs run --project ./app --builtin --out facts.jsonl
```

The supported runtime vocabulary is intentionally narrow:

```ser
find jsx button
find call fetch
find call axios

let label =
  from jsx button take text

let method =
  from call take method

let path =
  from argument[0] take value
```

It extracts literal button text and simple expression labels such as
`<button>{submitText}</button>`. It also extracts API paths from `fetch(...)`
and `axios.get/post/put/patch/delete(...)`, including simple string constants
used as the first argument.
