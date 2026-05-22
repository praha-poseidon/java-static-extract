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

```ser
rule "Axios API Call"
fact frontend_api_call

find call axios

let method =
  from call take method

let path =
  from argument[0] take value

build {
  client: "axios"
  method: method
  path: path
}
```

Use this for requests such as:

- extract React button text
- extract Chinese text from React buttons
- list button labels in `.tsx` or `.jsx` files
- extract frontend API calls from fetch or axios
- list API paths used by React pages
