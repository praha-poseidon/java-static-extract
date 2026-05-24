export interface ExtractorRunRequest {
  project?: string;
  sources: string[];
  ruleFiles: string[];
  ruleDirectories: string[];
  builtinRules: boolean;
  outputFile?: string;
}

export interface ExtractorRunResult {
  resultCount: number;
  outputFile?: string;
  results: ExtractedFact[];
}

export interface ExtractedFact {
  rule: string;
  factType: string;
  classifiers: Record<string, string>;
  fields: Record<string, string>;
  projectFilePath: string | null;
  absoluteFilePath: string | null;
  startLine: number;
  endLine: number;
  enclosingSymbol: string | null;
}
