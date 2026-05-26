import assert from "node:assert/strict";
import { existsSync, mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createStaticExtractTsSession, runStaticExtractTs, tryStaticExtractTs } from "../index.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const repo = findRepoRoot(root);
const example = resolve(repo, "spec/examples/ts/trace-external-call");

const tryReport = await tryStaticExtractTs({
  project: example,
  source: resolve(example, "input"),
  rule: resolve(example, "rule.ser"),
  traceRule: resolve(example, "trace.ser"),
  externalValues: resolve(example, "external-values.json")
});
assert.equal(tryReport.status, "MATCH");
assert.equal(tryReport.resultCount, 1);

const runReport = await runStaticExtractTs({
  project: example,
  source: resolve(example, "input"),
  rule: resolve(example, "rule.ser"),
  traceRule: resolve(example, "trace.ser"),
  externalValues: resolve(example, "external-values.json")
});
assert.equal(runReport.resultCount, 1);
assert.equal(runReport.results[0].fields.path, "/api/users");

const session = await createStaticExtractTsSession({
  project: example,
  source: resolve(example, "input")
});
const sessionReport = await session.run({
  rule: resolve(example, "rule.ser"),
  traceRule: resolve(example, "trace.ser"),
  externalValues: resolve(example, "external-values.json")
});
assert.equal(sessionReport.resultCount, 1);
assert.equal(sessionReport.results[0].fields.path, "/api/users");
session.dispose();

const crossFileProject = mkdtempSync(join(tmpdir(), "static-extract-ts-cross-file-"));
mkdirSync(resolve(crossFileProject, "src"), { recursive: true });
writeFileSync(resolve(crossFileProject, "src/config.ts"), "export const API = \"/api/cross-users\";\n", "utf8");
writeFileSync(
  resolve(crossFileProject, "src/user.ts"),
  "import { API } from './config';\nexport function loadUsers() { return fetch(API); }\n",
  "utf8"
);
writeFileSync(
  resolve(crossFileProject, "rule.ser"),
  [
    "rule \"Cross File Fetch\"",
    "fact frontend_api_call",
    "",
    "find call fetch",
    "",
    "let path =",
    "  from argument[0] take value",
    "",
    "build {",
    "  client: \"fetch\"",
    "  path: path",
    "}"
  ].join("\n"),
  "utf8"
);

const crossFileReport = await runStaticExtractTs({
  project: crossFileProject,
  source: resolve(crossFileProject, "src/user.ts"),
  rule: resolve(crossFileProject, "rule.ser")
});
assert.equal(crossFileReport.resultCount, 1);
assert.equal(crossFileReport.results[0].fields.path, "/api/cross-users");

function findRepoRoot(start) {
  let current = start;
  for (let i = 0; i < 8; i += 1) {
    if (existsSync(resolve(current, "spec/ser/Ser.g4"))) {
      return current;
    }
    const parent = resolve(current, "..");
    if (parent === current) {
      break;
    }
    current = parent;
  }
  throw new Error(`Could not find repo root from ${start}`);
}
