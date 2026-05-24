import type { ExtractorRunRequest, ExtractorRunResult } from "./contracts";

export async function init(_request: { project: string }): Promise<Record<string, unknown>> {
  throw new Error("static-extract-ts extractor init is implemented in extractor.mjs.");
}

export async function tryRules(_request: ExtractorRunRequest): Promise<Record<string, unknown>> {
  throw new Error("static-extract-ts extractor try is implemented in extractor.mjs.");
}

export async function diagnose(_request: ExtractorRunRequest): Promise<Record<string, unknown>> {
  throw new Error("static-extract-ts extractor diagnose is implemented in extractor.mjs.");
}

export async function run(_request: ExtractorRunRequest): Promise<ExtractorRunResult> {
  throw new Error("static-extract-ts extractor extraction is implemented in extractor.mjs.");
}
