# Static Extract TypeScript Runtime

This module is the TypeScript runtime home for Static Extract.

It owns TypeScript-family parsing, TypeScript-family built-in rules, and the
`static-extract-ts` CLI. It must implement the shared contracts under `spec/`
directly in TypeScript; it must not depend on the Java core jar.

Current status: minimal React extraction. The CLI can run SER rules that use
`find jsx button` and `from jsx button take text`, then write extracted facts as
JSONL.

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

The first supported runtime vocabulary is intentionally narrow:

```ser
find jsx button

let label =
  from jsx button take text
```

It extracts literal button text and simple expression labels such as
`<button>{submitText}</button>`.
