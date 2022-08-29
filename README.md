## vite-plugin-html-variables

A simple and customizable vite plugin to use javascript variables in html files.

### Installation

```
 npm i -D vite-plugin-html-variables
```

### How to use ?

#### Step 1

Add your variables in Enviroment

.env

```javascript
TITLE_VALUE = "My Title";
```

#### Step 2

Import `htmlVariables` and inlcude it in the plugins array of vite config file

vite.config.ts

```javascript
import htmlVariables from "vite-plugin-html-variables"

...

export default defineConfig({
  plugins: [
    htmlVariables(),
    ...
  ],
  ...
})
```

#### Step 3

Access variable from your html files.

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{{TITLE_VALUE}}</title>
  </head>
  <body unselectable="on">
    <div id="root"></div>

    <script type="module" src="/src/main.tsx"></script>
    <script src="https://www.youtube.com/iframe_api"></script>
  </body>
</html>
```

Now the variable syntax is replaced with its value.

### Config

#### Config object properties

`prefix` - Prefix for the html variable syntax. default: "{{"

`suffix` -  Suffix for the html variable syntax. default: "}}"

`variables` - An object of variables in which key is takes as variable name and value as value. eg: {TITLE_VALUE:"My Title"}

`excludeEnvVariables` - To exclude env variables from the html file. Default: false

You can pass the configuration object as an argument in the `htmlVariables(config)`

```typescript
 import htmlVariables from "vite-plugin-html-variables"

...
const config = {
    prefix:"<<",
    suffix:">>",
    variables:{MY_VAR:"My Value"},
    excludeEnvVariables:true
}

export default defineConfig({
  plugins: [
    htmlVariables(config),
    ...
  ],
  ...
})
```
