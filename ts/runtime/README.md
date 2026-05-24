# Static Extract TypeScript Runtime

This module implements the TypeScript-family Static Extract runtime with
`ts-morph`.

It owns `.ts`, `.tsx`, `.js`, and `.jsx` parsing, AST find/source/value
evaluation, built-in TS rules, and the `static-extract-ts` CLI. It implements
the shared contracts under `spec/` directly in TypeScript-family JavaScript and
does not depend on the Java core jar.

## Commands

```bash
npm test
node cli/static-extract-ts.mjs --help
node cli/static-extract-ts.mjs run --project ./app --builtin --out facts.jsonl
```

## Architecture

```text
cli/static-extract-ts.mjs    command line entry point
runtime/rule-parser.mjs      SER subset parser used by this runtime
runtime/ast-model.mjs        ts-morph SourceFile creation
runtime/find-executor.mjs    find jsx/call/function/variable
runtime/source-evaluator.mjs from/take evaluation
runtime/value-tracer.mjs     syntax-only value tracing
runtime/runtime.mjs          extraction orchestration
rules/                       built-in TS/React SER rules
```
