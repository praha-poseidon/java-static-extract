---
name: ser-author
description: Generate Static Extract SER rules from natural-language extraction requests, using runtime vocabulary files, and optionally validate generated SER by running a Static Extract CLI against a target project.
---

# SER Author

Use this skill when the user asks to create, draft, generate, review, or validate
Static Extract SER rules.

## Workflow

1. Identify the target runtime: Java/JDT, React/TS, or another runtime.
2. Read the matching vocabulary reference before writing SER:
   - Java/JDT: `references/java-jdt-vocabulary.md`
   - React/TS: `references/react-ts-vocabulary.md`
3. Generate one `.ser` file containing the needed `rule` and optional `trace`
   blocks. Do not split rule and trace into separate files unless the user asks.
4. If source code is available, run the appropriate CLI with the generated SER
   and validate the JSONL output against `spec/schema/extracted-fact.schema.json`.

## Guardrails

- Stay inside the runtime vocabulary. Do not invent selectors such as
  `find component` unless the target runtime vocabulary says it is supported.
- Prefer generic fact types such as `ui_text`, `api_call`, `config_key`, and
  `backend_endpoint`.
- Keep output fields descriptive and runtime-neutral where possible.
- SER is the asset. The generated `.ser` should be reusable by a graph system
  or by CLI execution.

## Deterministic Helper

For repeatable tests or simple supported prompts, use:

```bash
node skills/ser-author/scripts/generate_ser.mjs \
  --runtime react \
  --request request.txt \
  --out generated.ser
```

The helper currently supports React button text extraction. For other requests,
author the SER directly from the vocabulary reference.

