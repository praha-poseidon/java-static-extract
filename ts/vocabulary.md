# Static Extract TypeScript Extractor Vocabulary

This extractor is implemented on top of `ts-morph` and the TypeScript AST. SER
selectors map to AST shapes instead of framework-specific branches.

## Supported Find Selectors

```ser
find jsx <tagName>
find call <callee>
find function <name>
find variable <name>
find import <moduleSpecifier>
find class <name>
```

Examples:

```ser
find jsx button
find jsx ActionButton
find call fetch
find call axios.post
find call request
find function handleSave
find variable API_PATH
find import react
find class UserPanel
```

## Supported Sources

```ser
from children take text
from jsx <tagName> take text
from prop <name> take value
from prop <name> take reference
from prop <name> take raw
from argument[0] take value
from argument[0] take raw
from call take name
from call take owner
from call take method
from call take raw
from return take value
from return take raw
from variable take name
from variable take value
from variable take raw
from import take module
from import take default
from import take namespace
from import take named
from import take raw
from class take name
from class take extends
from class take raw
```

## Value Tracing

The TypeScript extractor builds a `ts-morph` project for the selected sources.
Value tracing supports:

- string literals
- no-substitution template literals
- identifiers bound to local and imported variable declarations
- template expressions
- binary string concatenation with `+`
- object property access for local object literals
- assignment values
- called function returns
- trace-ser continuation for stuck `call`, `field`, `parameter`, `method`,
  `return`, and `assignment` targets
- external dictionary lookup through trace-ser `namespace` + `key`

Basic cross-file tracing works when TypeScript can resolve the imported symbol.
For example, `fetch(API)` can resolve `API` from `import { API } from "./config"`.

Project sessions created through `createStaticExtractTsSession` reuse the same
project AST across repeated rule runs.

Limits still apply for dynamic `require`, runtime mutation, generated aliases
that are not visible to the TypeScript project, and values that only exist at
runtime unless they are supplied through external values.
