# Static Extract Spec

This directory is the language-neutral contract for Static Extract.

It is intentionally not a Java module. Java, TypeScript, or any other runtime
should implement this contract in its own language and expose the same CLI and
JSON output shape.

## Contents

- `schema/extracted-fact.schema.json` defines the runtime output record.
- `schema/rule-manifest.schema.json` defines a portable rule pack manifest.
- `cli/runtime-cli.md` defines the command shape each runtime CLI should expose.

## Runtime Relationship

```text
spec/
  Language-neutral SER, CLI, and JSON contracts.

static-extract-core-java
  Java implementation of SER parsing and Java rule model classes.

static-extract-runtime-java-*
  Java/JDT runtime and Java CLI. Depends on static-extract-core-java.

future static-extract-runtime-ts-*
  TypeScript runtime and TypeScript CLI. Implements spec directly in TS.
  Does not depend on static-extract-core-java.
```

The stable integration point across languages is JSON, not a shared Java jar.
