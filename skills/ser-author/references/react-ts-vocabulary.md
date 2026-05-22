# React/TS Vocabulary

Source of truth: `static-extract-runtime-ts/vocabulary.md`.

Currently supported SER:

```ser
rule "React Button Text"
fact ui_text

find jsx button

let label =
  from jsx button take text

build {
  component: "react"
  kind: "button"
  text: label
}
```

Use this for requests such as:

- extract React button text
- extract Chinese text from React buttons
- list button labels in `.tsx` or `.jsx` files

