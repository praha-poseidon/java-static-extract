# Universal Rule Engine Roadmap

This document describes the direction for evolving Java Static Extract from a
Java-focused static extraction engine into a universal rule engine for
cross-language code facts and frontend-to-backend flow analysis.

本文档描述 Java Static Extract 的演进方向：从 Java 静态提取引擎，演进为面向多语言代码事实和前后端链路分析的通用规则引擎。

## Goal

The goal is not to hard-code every framework or project pattern into the engine.
The goal is to provide:

目标不是把所有框架和项目形态都写死进引擎，而是提供：

- A shared rule language skeleton.
- Pluggable language vocabularies.
- Runtime implementations for different source languages.
- Rulesets for popular frameworks and project-specific conventions.
- A linker that connects extracted facts across frontend and backend code.

- 统一的规则语言骨架。
- 可插拔的语言词汇。
- 面向不同源码语言的 runtime 实现。
- 面向主流框架和项目私有约定的规则包。
- 把前端和后端事实连接起来的 linker。

The target shape is:

目标结构：

```text
SER Core DSL
  -> Java vocabulary + JDT runtime
  -> TSX vocabulary + TypeScript runtime
  -> Vue vocabulary + Vue runtime
  -> Rulesets
  -> Facts
  -> Linker
  -> Flows
```

## Core DSL

The core DSL should stay small and language-neutral. It should describe rule
structure, value extraction, tracing, and output assembly.

核心 DSL 应该保持小而中立。它只描述规则结构、取值、追踪和输出组装。

Core syntax:

核心语法：

```text
rule
fact
find
let
from
take
default
map
trace
when
build
normalize
```

The core parser should understand the shape of a rule. It should not need to
know every source-language element such as Java annotations, JSX props, or Vue
slots.

core parser 只需要理解规则结构，不应该知道所有源码语言元素，比如 Java annotation、JSX prop 或 Vue slot。

## Vocabulary

A vocabulary is the set of language or framework words that a runtime knows how
to interpret.

词汇是 runtime 能解释的一组语言或框架相关名词和动作。

Examples:

示例：

```text
Java vocabulary:
  class, method, field, annotation, parameter, argument, return, call, new

TSX vocabulary:
  jsx, component, prop, children, event, handler, hook, import, route, call

Vue vocabulary:
  component, template, directive, slot, event, binding, script, route, call
```

The DSL skeleton is shared, but vocabularies are runtime-specific.

DSL 骨架统一，但词汇由 runtime 提供。

Example Java rule:

Java 规则示例：

```ser
rule "Spring MVC Endpoint"
fact backend_endpoint

find method with annotation @*Mapping

let path =
  from annotation on method @*Mapping take attr(value)

build {
  method: "GET"
  path: path
}
```

Example TSX rule:

TSX 规则示例：

```ser
rule "React Button Action"
fact ui_action

find jsx Button

let label =
  from children take text
  from prop title take value

let handler =
  from prop onClick take reference

build {
  label: label
  event: "click"
  handler: handler
}
```

In these examples, `rule`, `fact`, `find`, `let`, `from`, `take`, and `build`
belong to the core DSL. `method`, `annotation`, `jsx`, `children`, and `prop`
belong to runtime vocabularies.

在这些示例中，`rule`、`fact`、`find`、`let`、`from`、`take`、`build` 属于 core DSL；`method`、`annotation`、`jsx`、`children`、`prop` 属于 runtime 词汇。

## Runtime

A runtime executes rules for one source language or source representation.

runtime 负责在某一种源码语言或源码表示上执行规则。

Initial runtime targets:

初始 runtime 目标：

```text
java-static-extract-jdt
  Java source through Eclipse JDT.

typescript-static-extract
  TypeScript and TSX through the TypeScript compiler API or ts-morph.

vue-static-extract
  Vue single-file components through a Vue parser plus TypeScript support.
```

Runtime responsibilities:

runtime 职责：

- Parse source files or receive parsed source units.
- Implement supported `find` kinds.
- Implement supported `from` sources.
- Implement supported `take` operations.
- Trace values when `take value` or equivalent semantic extraction is requested.
- Report diagnostics when a rule cannot be evaluated.

- 解析源码文件，或接收已经解析好的源码单元。
- 实现支持的 `find` 类型。
- 实现支持的 `from` 来源。
- 实现支持的 `take` 操作。
- 在 `take value` 或等价语义取值时追踪值。
- 当规则无法执行时返回诊断信息。

The core module should not hard-code every runtime kind. It should preserve
unknown kinds as strings or structured selectors and let the selected runtime
validate them.

core 模块不应该写死所有 runtime 类型。它应该把未知 kind 保留为字符串或结构化 selector，由选中的 runtime 校验。

## Facts

`endpoint` is useful for HTTP and RPC extraction, but frontend-to-backend
analysis needs a broader concept. The DSL should introduce `fact` as the
general output type.

`endpoint` 对 HTTP 和 RPC 提取有用，但前后端链路分析需要更通用的概念。DSL 应该引入 `fact` 作为通用输出类型。

Initial standard fact types:

初始标准事实类型：

```text
ui_action
frontend_route
frontend_handler
frontend_api_call
backend_endpoint
config_key
permission
database_operation
message_operation
scheduled_job
```

Each extracted fact should have stable metadata plus flexible fields:

每条事实应该包含稳定元数据和灵活字段：

```json
{
  "factType": "frontend_api_call",
  "language": "typescript",
  "framework": "axios",
  "file": "src/pages/UserPage.tsx",
  "startLine": 42,
  "endLine": 42,
  "symbol": "handleSubmit",
  "fields": {
    "method": "POST",
    "path": "/api/users"
  }
}
```

The current `endpoint type + direction + fields` model can remain supported for
compatibility, but new rules should prefer `fact`.

当前的 `endpoint type + direction + fields` 模型可以继续兼容，但新规则应优先使用 `fact`。

## Frontend Trace

Frontend code often hides visible UI text and API paths behind variables,
functions, object maps, i18n calls, generated clients, or wrapper APIs.

前端代码经常把可见文案和接口路径藏在变量、函数、对象映射、i18n 调用、生成 client 或封装 API 后面。

The first TSX runtime should support value tracing for:

第一版 TSX runtime 应支持这些值追踪：

```text
string literals
const variables
function return values
object properties
enum-like maps
template strings
simple conditional expressions
i18n calls such as t("user.submit")
imported constants
```

Example target cases:

目标示例：

```tsx
<Button>提交</Button>

const label = "提交";
<Button>{label}</Button>

function submitText() {
  return "提交";
}
<Button>{submitText()}</Button>

<Button>{t("user.submit")}</Button>
```

## Rulesets

Rulesets should be first-class assets. The engine should not try to know every
framework in code.

规则包应该是一等资产。引擎不应该在代码里认识所有框架。

Proposed layout:

建议目录结构：

```text
rulesets/
  frontend/
    react/
      ruleset.yaml
      rules/
      traces/
      examples/
      expected/
    axios/
  java/
    spring-web/
    spring-config/
    rest-template/
    feign/
```

Example `ruleset.yaml`:

示例 `ruleset.yaml`：

```yaml
id: frontend/react
language: typescript
runtime: tsx
facts:
  - ui_action
  - frontend_handler
```

The CLI should eventually support:

CLI 后续应支持：

```bash
java-static-extract run \
  --project /my-project \
  --ruleset frontend/react \
  --ruleset frontend/axios \
  --ruleset java/spring-web \
  --out facts.jsonl
```

Project-specific rules should be composable with official rulesets:

项目私有规则应该可以和官方规则包组合：

```bash
java-static-extract run \
  --project /my-project \
  --ruleset frontend/react \
  --rules ./company-rules \
  --out facts.jsonl
```

## Linker

The linker consumes extracted facts. It should not parse source code. Its job is
to connect facts into flows.

linker 消费已经提取出来的 facts，不解析源码。它负责把事实连接成链路。

Target frontend-to-backend flow:

目标前后端链路：

```text
ui_action
  -> frontend_handler
  -> frontend_api_call
  -> backend_endpoint
```

Example flow output:

链路输出示例：

```json
{
  "factType": "ui_to_backend_flow",
  "ui": {
    "label": "提交",
    "file": "src/pages/UserPage.tsx",
    "route": "/users"
  },
  "frontendCall": {
    "method": "POST",
    "path": "/api/users"
  },
  "backendEndpoint": {
    "method": "POST",
    "path": "/api/users",
    "handler": "UserController.create"
  }
}
```

Initial linker matching:

初始关联规则：

```text
handler reference/name
call containment within handler
HTTP method
normalized path
base URL and proxy prefix normalization
path variable normalization: /users/:id, /users/{id}, /users/${id}
```

## Discovery

Rulesets cannot cover every company-specific framework or wrapper. The system
should support discovery so users and AI agents can identify project-specific
patterns.

规则包无法覆盖所有公司私有框架或封装。系统应该支持 discovery，帮助用户和 AI agent 发现项目私有模式。

Future command:

未来命令：

```bash
java-static-extract discover --project /my-project --language typescript
```

Possible output:

可能输出：

```json
{
  "components": ["Button", "CompanyButton", "TableAction"],
  "events": ["onClick", "onSubmit"],
  "requestWrappers": ["request", "httpClient", "apiClient"],
  "i18nCalls": ["t", "intl.formatMessage"],
  "candidateRules": []
}
```

Discovery is where AI agents can help most:

discovery 是 AI agent 最能发挥作用的地方：

```text
inspect project
-> discover common wrappers
-> generate SER rules
-> try
-> diagnose
-> adjust
-> run
```

## Implementation Roadmap

Suggested order:

建议顺序：

1. Add `fact` to the DSL while preserving `endpoint`.
2. Make element kinds and take kinds runtime-extensible where practical.
3. Define the standard fact schema and JSONL output.
4. Add ruleset metadata and CLI loading by `--ruleset`.
5. Build a minimal TSX runtime for React button, event handler, and axios call extraction.
6. Build a minimal linker for `ui_action -> frontend_api_call -> backend_endpoint`.
7. Add frontend diagnostics for unresolved label, handler, and API path values.
8. Add discovery for frontend components, request wrappers, and i18n calls.
9. Expand official rulesets after the fact model and runtime vocabulary stabilize.

1. 给 DSL 增加 `fact`，同时保留 `endpoint` 兼容。
2. 在可行范围内让 element kind 和 take kind 可由 runtime 扩展。
3. 定义标准 fact schema 和 JSONL 输出。
4. 增加 ruleset 元数据和 CLI `--ruleset` 加载。
5. 做最小 TSX runtime，支持 React Button、事件 handler、axios 调用提取。
6. 做最小 linker，串起 `ui_action -> frontend_api_call -> backend_endpoint`。
7. 增加前端诊断，解释文案、handler、API path 无法解析的原因。
8. 增加 discovery，发现前端组件、request 封装和 i18n 调用。
9. 等 fact model 和 runtime vocabulary 稳定后，再扩展官方 rulesets。

## Near-Term Minimal Loop

The first milestone should be a small but complete frontend-to-backend loop:

第一个里程碑应该是一个小而完整的前后端闭环：

```text
React TSX Button
  -> onClick handler
  -> axios/request call
  -> Spring MVC endpoint
  -> ui_to_backend_flow JSONL
```

This loop proves the product direction better than only adding more backend
framework rules.

这个闭环比单纯增加更多后端框架规则更能证明产品方向。
