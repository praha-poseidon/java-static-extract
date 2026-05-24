import {
  BaseErrorListener,
  CharStream,
  CommonTokenStream,
  RecognitionException,
  Recognizer,
  Token
} from "antlr4ng";
import { SerLexer } from "../generated/ser/SerLexer.js";
import {
  BuildDeclContext,
  BuildExprContext,
  FindDeclContext,
  LetDeclContext,
  SerParser,
  SourceExprContext,
  SourceLineContext,
  TraceEntryContext,
  WhenDeclContext
} from "../generated/ser/SerParser.js";

type SourceSpec = {
  element: string;
  name?: string;
  index?: number;
  take: string;
};

type BuildValue = string | { ref: string };

export type SerRuleModel = {
  name: string;
  factType: string;
  find: { kind: string; name: string };
  lets: Record<string, SourceSpec[]>;
  build: Record<string, BuildValue>;
};

export type TraceRuleSetModel = {
  name: string;
  entries: TraceEntryModel[];
};

export type TraceEntryModel = {
  target: string;
  when: TraceWhenModel[];
  lets: Record<string, SourceSpec[]>;
  build: Record<string, BuildValue>;
};

export type TraceWhenModel = {
  kind: string;
  name?: string;
  owner?: string;
  value?: string;
  type?: string;
};

export function parseRuleModel(source: string, file: string): SerRuleModel {
  const parser = createParser(source, file);
  const tree = parser.ruleFile();
  throwIfSyntaxErrors(parser, file);
  return {
    name: unquote(tree.ruleDecl().STRING().getText()),
    factType: tree.ruleTargetDecl().factDecl()?.valueToken().getText() ?? "endpoint",
    find: parseFind(tree.findDecl()),
    lets: parseLets(tree.letDecl()),
    build: parseBuild(tree.buildDecl())
  };
}

export function parseTraceRuleSetModel(source: string, file: string): TraceRuleSetModel {
  const parser = createParser(source, file);
  const tree = parser.traceFile();
  throwIfSyntaxErrors(parser, file);
  return {
    name: unquote(tree.traceDecl().STRING().getText()),
    entries: tree.traceEntry().map(parseTraceEntry)
  };
}

function createParser(source: string, file: string): SerParser {
  const errors: string[] = [];
  const listener = new ThrowingErrorListener(file, errors);
  const lexer = new SerLexer(CharStream.fromString(source));
  lexer.removeErrorListeners();
  lexer.addErrorListener(listener);
  const tokens = new CommonTokenStream(lexer);
  const parser = new SerParser(tokens);
  parser.removeErrorListeners();
  parser.addErrorListener(listener);
  (parser as SerParser & { staticExtractErrors?: string[] }).staticExtractErrors = errors;
  return parser;
}

function throwIfSyntaxErrors(parser: SerParser, file: string): void {
  const errors = (parser as SerParser & { staticExtractErrors?: string[] }).staticExtractErrors ?? [];
  if (errors.length > 0) {
    throw new Error(`Failed to parse SER file ${file}: ${errors.join("; ")}`);
  }
}

class ThrowingErrorListener extends BaseErrorListener {
  public constructor(private readonly file: string, private readonly errors: string[]) {
    super();
  }

  public override syntaxError(
    _recognizer: Recognizer<any>,
    _offendingSymbol: Token | null,
    line: number,
    column: number,
    msg: string,
    _e: RecognitionException | null
  ): void {
    this.errors.push(`${this.file}:${line}:${column} ${msg}`);
  }
}

function parseFind(ctx: FindDeclContext): { kind: string; name: string } {
  if (ctx._genericFindKind) {
    return { kind: text(ctx._genericFindKind), name: ctx._genericFindName ? text(ctx._genericFindName) : "*" };
  }
  if (ctx.METHOD()) {
    return { kind: "method", name: ctx.methodPattern()?.getText() ?? "*" };
  }
  if (ctx.CLASS()) {
    return { kind: "class", name: "*" };
  }
  if (ctx.FIELD()) {
    return { kind: "field", name: ctx._fieldName ? text(ctx._fieldName) : "*" };
  }
  return { kind: "unknown", name: "*" };
}

function parseLets(contexts: LetDeclContext[]): Record<string, SourceSpec[]> {
  const lets: Record<string, SourceSpec[]> = {};
  for (const ctx of contexts) {
    lets[text(ctx.nameItem())] = ctx.sourceLine().map(parseSourceLine);
  }
  return lets;
}

function parseSourceLine(ctx: SourceLineContext): SourceSpec {
  return {
    ...parseSource(ctx.sourceExpr()),
    take: normalizeTake(ctx.takeExpr().getText())
  };
}

function parseSource(ctx: SourceExprContext): Omit<SourceSpec, "take"> {
  if (ctx.ARGUMENT()) {
    return { element: "argument", index: Number(ctx.INT()?.getText() ?? "0") };
  }
  if (ctx._genericSourceKind) {
    return {
      element: text(ctx._genericSourceKind),
      ...(ctx._genericSourceName ? { name: text(ctx._genericSourceName) } : {})
    };
  }
  if (ctx.CALL()) {
    return { element: "call" };
  }
  if (ctx.RETURN()) {
    return { element: "return" };
  }
  if (ctx.FIELD()) {
    return { element: "field", ...(ctx._sourceName ? { name: text(ctx._sourceName) } : {}) };
  }
  if (ctx.PARAMETER()) {
    return { element: "parameter", ...(ctx._sourceName ? { name: text(ctx._sourceName) } : {}) };
  }
  if (ctx.CLASS()) {
    return { element: "class" };
  }
  if (ctx.METHOD()) {
    return { element: "method" };
  }
  if (ctx.ASSIGNMENT()) {
    return { element: "assignment" };
  }
  if (ctx.LITERAL()) {
    return { element: "literal", name: unquote(ctx.literal()?.getText() ?? "") };
  }
  if (ctx.NEW()) {
    return { element: "new", name: ctx.qualifiedName()?.getText() ?? "" };
  }
  if (ctx.ANNOTATION()) {
    return { element: "annotation", name: ctx.annotationRef()?.getText() ?? "" };
  }
  return { element: ctx.getText() };
}

function parseBuild(ctx: BuildDeclContext): Record<string, BuildValue> {
  const build: Record<string, BuildValue> = {};
  for (const field of ctx.buildField()) {
    const name = field.buildFieldName().getText();
    build[name] = parseBuildExpr(field.buildExpr());
  }
  return build;
}

function parseBuildExpr(ctx: BuildExprContext): BuildValue {
  if (ctx.STRING()) {
    return unquote(ctx.STRING()!.getText());
  }
  return { ref: ctx.nameItem()?.getText() ?? ctx.getText() };
}

function parseTraceEntry(ctx: TraceEntryContext): TraceEntryModel {
  return {
    target: ctx.traceTarget().getText(),
    when: ctx.whenDecl().map(parseWhen),
    lets: parseLets(ctx.letDecl()),
    build: parseBuild(ctx.buildDecl())
  };
}

function parseWhen(ctx: WhenDeclContext): TraceWhenModel {
  if (ctx.CALL() && ctx.methodPattern()) {
    const pattern = ctx.methodPattern()!.getText();
    const lastDot = pattern.lastIndexOf(".");
    return {
      kind: "call",
      owner: lastDot >= 0 ? pattern.slice(0, lastDot) : undefined,
      name: lastDot >= 0 ? pattern.slice(lastDot + 1) : pattern
    };
  }
  if (ctx.CALL() && ctx.NAME()) {
    return { kind: "callName", value: ctx.valueToken()?.getText() ?? "" };
  }
  if (ctx.CALL() && ctx.OWNER()) {
    return { kind: "callOwner", value: ctx.qualifiedName()?.getText() ?? "" };
  }
  if (ctx.METHOD() && ctx.NAME()) {
    return { kind: "methodName", value: ctx.valueToken()?.getText() ?? "" };
  }
  if (ctx.FIELD() && ctx.NAME()) {
    return { kind: "fieldName", value: ctx.valueToken()?.getText() ?? "" };
  }
  if (ctx.PARAMETER() && ctx.NAME()) {
    return { kind: "parameterName", value: ctx.valueToken()?.getText() ?? "" };
  }
  return { kind: ctx.getText() };
}

function normalizeTake(value: string): string {
  const attr = value.match(/^attr\((.+)\)$/);
  return attr ? `attr(${attr[1]})` : value;
}

function text(value: { getText(): string }): string {
  return value.getText();
}

function unquote(value: string): string {
  return value.startsWith("\"") && value.endsWith("\"")
    ? value.slice(1, -1).replace(/\\"/g, "\"")
    : value;
}
