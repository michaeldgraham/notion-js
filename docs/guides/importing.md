---
id: importing
title: Importing
---
We support ESM, Node and the Browser:

## ESM

```js
import { Notion } from "@neurosity/notion";
```

## Node

```js
const { Notion } = require("@neurosity/notion");
```

## Browser

```html
<script type="module">
  import { Notion } from "./node_modules/notion/esm/notion.mjs";
</script>
<script nomodule src="./node_modules/notion/browser/notion.js">
```
