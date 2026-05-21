import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import { dirname, extname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const runtimeRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export async function run(request) {
  const ruleFiles = await resolveRuleFiles(request);
  if (ruleFiles.length === 0) {
    throw new Error("Pass at least one SER rule file, rule directory, or enable builtin rules.");
  }

  const rules = [];
  for (const file of ruleFiles) {
    rules.push(parseRule(await readFile(file, "utf8"), file));
  }

  const sourceFiles = await resolveSourceFiles(request.sources);
  const results = [];
  for (const sourceFile of sourceFiles) {
    const source = await readFile(sourceFile, "utf8");
    for (const rule of rules) {
      if (rule.findKind === "jsx" && rule.findName === "button") {
        results.push(...extractReactButtons(rule, source, sourceFile, request.project));
      }
    }
  }

  const lines = results.map((result) => JSON.stringify(result)).join("\n");
  if (request.outputFile) {
    await mkdir(dirname(resolvePath(request.outputFile)), { recursive: true });
    await writeFile(request.outputFile, lines ? lines + "\n" : "", "utf8");
  }

  return {
    resultCount: results.length,
    outputFile: request.outputFile,
    results
  };
}

async function resolveRuleFiles(request) {
  const files = [];
  files.push(...request.ruleFiles.map((file) => resolvePath(file)));
  for (const directory of request.ruleDirectories) {
    files.push(...await scanFiles(resolvePath(directory), [".ser"]));
  }
  if (request.builtinRules) {
    const manifestFile = join(runtimeRoot, "rules/manifest.json");
    const manifest = JSON.parse(await readFile(manifestFile, "utf8"));
    files.push(...manifest.rules.map((rule) => join(runtimeRoot, "rules", rule)));
  }
  return [...new Set(files)].sort();
}

async function resolveSourceFiles(sources) {
  const files = [];
  for (const source of sources) {
    const resolved = resolvePath(source);
    if (!existsSync(resolved)) {
      continue;
    }
    if (statSync(resolved).isDirectory()) {
      files.push(...await scanFiles(resolved, [".jsx", ".tsx"]));
    } else {
      files.push(resolved);
    }
  }
  return files.sort();
}

async function scanFiles(root, extensions) {
  if (!existsSync(root)) {
    return [];
  }
  const files = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const path = join(root, entry.name);
    if (entry.isDirectory()) {
      files.push(...await scanFiles(path, extensions));
    } else if (entry.isFile() && extensions.includes(extname(entry.name))) {
      files.push(path);
    }
  }
  return files;
}

function parseRule(source, file) {
  const ruleName = matchRequired(source, /^rule\s+"([^"]+)"/m, "rule name", file);
  const factType = matchRequired(source, /^fact\s+([A-Za-z_][\w$-]*)/m, "fact type", file);
  const find = matchRequired(source, /^find\s+([A-Za-z_][\w$-]*)\s+([A-Za-z_][\w$-]*)/m, "find", file);
  const buildSource = matchRequired(source, /build\s*\{([\s\S]*?)\}/m, "build block", file);
  const fields = {};
  for (const line of buildSource.split(/\r?\n/)) {
    const match = line.trim().match(/^([A-Za-z_][\w$-]*)\s*:\s*(.+)$/);
    if (!match) {
      continue;
    }
    const [, name, rawValue] = match;
    const quoted = rawValue.match(/^"((?:\\"|[^"])*)"$/);
    fields[name] = quoted ? quoted[1].replace(/\\"/g, "\"") : { ref: rawValue.trim() };
  }
  return {
    name: ruleName,
    factType,
    findKind: find[1],
    findName: find[2],
    fields
  };
}

function matchRequired(source, regex, label, file) {
  const match = source.match(regex);
  if (!match) {
    throw new Error(`Failed to parse ${label} in SER rule: ${file}`);
  }
  return match.length === 2 ? match[1] : match;
}

function extractReactButtons(rule, source, sourceFile, projectRoot) {
  const results = [];
  const buttonPattern = /<button\b[^>]*>([\s\S]*?)<\/button>/g;
  let match;
  while ((match = buttonPattern.exec(source)) !== null) {
    const label = readButtonText(match[1]);
    if (!label) {
      continue;
    }
    const startLine = lineAt(source, match.index);
    const endLine = lineAt(source, match.index + match[0].length - 1);
    const fields = {};
    for (const [name, value] of Object.entries(rule.fields)) {
      fields[name] = typeof value === "object" && value.ref === "label" ? label : value;
    }
    results.push({
      rule: rule.name,
      factType: rule.factType,
      classifiers: {},
      fields,
      projectFilePath: projectFilePath(sourceFile, projectRoot),
      absoluteFilePath: sourceFile,
      startLine,
      endLine,
      enclosingSymbol: enclosingComponent(source, match.index)
    });
  }
  return results;
}

function readButtonText(inner) {
  const expression = inner.trim().match(/^\{\s*([^}]+?)\s*\}$/);
  if (expression) {
    return `{${expression[1].trim()}}`;
  }
  return inner.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function lineAt(source, index) {
  return source.slice(0, index).split("\n").length;
}

function enclosingComponent(source, index) {
  const before = source.slice(0, index);
  const functionMatches = [...before.matchAll(/(?:export\s+)?function\s+([A-Z][A-Za-z0-9_]*)\s*\(/g)];
  if (functionMatches.length > 0) {
    return functionMatches.at(-1)[1];
  }
  const constMatches = [...before.matchAll(/(?:export\s+)?const\s+([A-Z][A-Za-z0-9_]*)\s*=/g)];
  if (constMatches.length > 0) {
    return constMatches.at(-1)[1];
  }
  return null;
}

function projectFilePath(sourceFile, projectRoot) {
  if (!projectRoot) {
    return sourceFile.split(sep).join("/");
  }
  return relative(resolvePath(projectRoot), sourceFile).split(sep).join("/");
}

function resolvePath(path) {
  return isAbsolute(path) ? resolve(path) : resolve(process.cwd(), path);
}
