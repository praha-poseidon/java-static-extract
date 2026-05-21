import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const repo = resolve(root, "..");

assert.ok(existsSync(resolve(repo, "spec/ser/Ser.g4")));
assert.ok(existsSync(resolve(repo, "spec/schema/extracted-fact.schema.json")));

const manifest = JSON.parse(readFileSync(resolve(root, "rules/manifest.json"), "utf8"));
assert.equal(manifest.runtime, "ts");
assert.deepEqual(manifest.rules, [
  "vue/vue-button-text.ser",
  "react/react-button-text.ser"
]);
for (const rule of manifest.rules) {
  assert.ok(existsSync(resolve(root, "rules", rule)), `Missing rule: ${rule}`);
}

const help = execFileSync("node", [resolve(root, "bin/static-extract-ts.mjs"), "--help"], {
  encoding: "utf8"
});
assert.match(help, /Usage: static-extract-ts/);

