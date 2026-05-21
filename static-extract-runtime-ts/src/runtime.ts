import type { RuntimeRunRequest, RuntimeRunResult } from "./contracts";

export async function run(_request: RuntimeRunRequest): Promise<RuntimeRunResult> {
  throw new Error("static-extract-ts runtime extraction is not implemented yet.");
}

