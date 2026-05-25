import { diagnose, init, run, tryRules } from "./extractor/extractor.mjs";

export { diagnose, init, run, tryRules };

export async function runStaticExtractTs(options) {
  return run(normalizeExtractionOptions(options));
}

export async function tryStaticExtractTs(options) {
  return tryRules(normalizeExtractionOptions(options));
}

export async function diagnoseStaticExtractTs(options) {
  return diagnose(normalizeExtractionOptions(options));
}

function normalizeExtractionOptions(options = {}) {
  return {
    project: options.project ?? process.cwd(),
    sources: array(options.sources ?? options.source ?? [options.project ?? process.cwd()]),
    ruleFiles: array(options.ruleFiles ?? options.ruleFile ?? options.rule),
    ruleDirectories: array(options.ruleDirectories ?? options.ruleDirectory ?? options.rules),
    traceRuleFiles: array(options.traceRuleFiles ?? options.traceRuleFile ?? options.traceRule),
    traceRuleDirectories: array(options.traceRuleDirectories ?? options.traceRuleDirectory ?? options.traceRules),
    builtinRules: Boolean(options.builtinRules ?? options.builtin),
    externalValuesFile: options.externalValuesFile ?? options.externalValues,
    outputFile: options.outputFile ?? options.out
  };
}

function array(value) {
  if (value === undefined || value === null || value === false) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
