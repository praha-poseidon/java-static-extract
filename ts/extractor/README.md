# Static Extract TypeScript Extractor

This module implements the TypeScript-family Static Extract extractor with
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
extractor/rule-parser.mjs    SER subset parser used by this extractor
extractor/ast-model.mjs      ts-morph SourceFile creation
extractor/find-executor.mjs  find jsx/call/function/variable
extractor/source-evaluator.mjs
                             from/take evaluation
extractor/value-tracer.mjs   syntax-only value tracing
extractor/extractor.mjs      extraction orchestration
rules/                       built-in TS/React SER rules
```
