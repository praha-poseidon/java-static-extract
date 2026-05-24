import { Node } from "ts-morph";
import { callName, callOwner } from "./find-executor.mjs";
import { evaluateSource } from "./source-evaluator.mjs";

export function resolveTrace(node, options = {}) {
  if (!node || !options.traceRuleSets?.length) {
    return "";
  }
  const target = traceTarget(node);
  if (!target) {
    return "";
  }
  for (const ruleSet of options.traceRuleSets) {
    for (const entry of ruleSet.entries ?? []) {
      if (entry.target !== target.kind || !matchesWhen(entry.when ?? [], target)) {
        continue;
      }
      const values = evaluateTraceLets(entry, target, options);
      const built = buildTraceFields(entry, values);
      const resolved = resolveExternalValue(built, options.externalValues);
      if (resolved !== "") {
        return resolved;
      }
      if (typeof built.value === "string") {
        return built.value;
      }
      if (typeof built.default === "string") {
        return built.default;
      }
    }
  }
  return "";
}

function traceTarget(node) {
  if (Node.isCallExpression(node)) {
    return {
      kind: "call",
      node,
      name: callName(node),
      owner: callOwner(node),
      raw: node.getText()
    };
  }
  return null;
}

function matchesWhen(conditions, target) {
  return conditions.every((condition) => {
    if (condition.kind === "call") {
      return (!condition.name || condition.name === target.name) &&
        (!condition.owner || condition.owner === target.owner || `${condition.owner}.${condition.name}` === `${target.owner}.${target.name}`);
    }
    if (condition.kind === "callName") {
      return condition.value === target.name;
    }
    if (condition.kind === "callOwner") {
      return condition.value === target.owner;
    }
    return true;
  });
}

function evaluateTraceLets(entry, target, options) {
  const values = {};
  for (const [name, sources] of Object.entries(entry.lets ?? {})) {
    for (const source of sources) {
      const value = evaluateSource(source, target, options);
      if (value !== "") {
        values[name] = value;
        break;
      }
    }
    if (!Object.hasOwn(values, name)) {
      values[name] = "";
    }
  }
  return values;
}

function buildTraceFields(entry, values) {
  const fields = {};
  for (const [name, value] of Object.entries(entry.build ?? {})) {
    fields[name] = typeof value === "object"
      ? Object.hasOwn(values, value.ref) ? values[value.ref] : ""
      : value;
  }
  return fields;
}

function resolveExternalValue(fields, externalValues = {}) {
  const namespace = fields.namespace ?? "default";
  const key = fields.key ?? fields.lookup ?? "";
  if (!key) {
    return "";
  }
  const namespaceValues = externalValues[namespace];
  if (!namespaceValues || !Object.hasOwn(namespaceValues, key)) {
    return "";
  }
  const value = namespaceValues[key];
  return Array.isArray(value) ? String(value[0] ?? "") : String(value ?? "");
}
