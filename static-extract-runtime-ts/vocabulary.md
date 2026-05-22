# Static Extract TypeScript Runtime Vocabulary

This file defines the SER vocabulary currently implemented by the TypeScript
runtime. SER authoring tools and Skills must stay within this vocabulary unless
they also update the runtime.

## React

Supported find selectors:

```ser
find jsx button
```

Supported source expressions:

```ser
from jsx button take text
```

Current behavior:

- Scans `.tsx` and `.jsx` files.
- Matches `<button>...</button>`.
- Extracts literal text, for example `<button>Save</button>` -> `Save`.
- Extracts simple expression text as a symbolic label, for example
  `<button>{submitText}</button>` -> `{submitText}`.
- Emits `enclosingSymbol` when the button appears inside a function component
  such as `function App()`.

Recommended fact:

```ser
fact ui_text
```

Recommended build fields:

```ser
build {
  component: "react"
  kind: "button"
  text: label
}
```

