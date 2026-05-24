# Static Extract Spec

This directory is the language-neutral contract for Static Extract.

It is intentionally not a Java module. Java, TypeScript, or any other extractor
should implement this contract in its own language and expose the same CLI and
JSON output shape.

## Contents

- `schema/extracted-fact.schema.json` defines the extractor output record.
- `schema/rule-manifest.schema.json` defines a portable rule pack manifest.
- `ser/Ser.g4` defines the SER grammar used by extractor parser implementations.
- `ser/SER_SPEC.md` defines the SER language semantics and conformance rules.
- `cli/extractor-cli.md` defines the command shape each extractor CLI should expose.
- `examples/` contains executable compatibility examples grouped by extractor
  language, with rules, sources, and expected JSONL output.

## Extractor Relationship

```text
spec/
  Language-neutral SER, CLI, and JSON contracts.

java/core
  Java implementation of SER parsing and Java rule model classes.

java/jdt
  Java/JDT extractor. Depends on java/core.

java/cli
  Java CLI over the Java/JDT extractor.

ts
  TypeScript extractor and TypeScript CLI. Implements spec directly in TS.
  Does not depend on java/core.
```

The stable integration point across languages is JSON, not a shared Java jar.

## How Code Uses This Spec

Extractors should reference files in this directory from tests and release
checks. The spec is not only documentation.

The Java CLI tests currently read:

```text
spec/schema/extracted-fact.schema.json
spec/examples/java/*
```

They validate JSONL produced by `static-extract-java run` against the schema and
compare it with example `expected.jsonl` files.

The Java parser build copies:

```text
spec/ser/Ser.g4
```

into the Java parser module before ANTLR generates parser code. Future extractors
should use the same grammar source or generated parser output for their own
language.

Future extractors should do the same:

```text
static-extract-ts run ... -> JSONL -> validate each line with extracted-fact.schema.json
static-extract-vue run ... -> JSONL -> validate each line with extracted-fact.schema.json
```

That makes the spec a machine-checked compatibility contract.
