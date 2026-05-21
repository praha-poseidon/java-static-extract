# Static Extract TypeScript Runtime

This module is the TypeScript runtime home for Static Extract.

It owns TypeScript-family parsing, TypeScript-family built-in rules, and the
`static-extract-ts` CLI. It must implement the shared contracts under `spec/`
directly in TypeScript; it must not depend on the Java core jar.

Current status: runtime skeleton only. The CLI shape and output contract are
reserved, but TS/Vue/React source extraction is not implemented yet.

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

`run` currently returns a structured not-implemented error. The command is
present so the runtime contract and packaging shape are fixed before parser
work starts.

