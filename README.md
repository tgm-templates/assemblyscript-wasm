AssemblyScript Wasm Demo
========================

# Features

* jest testing
* as-bind
* Ready for Node.js and Deno

# Deno integration

### How to build Deno module?

```
$ npm run deno:build
$ deno run den-demo.ts
```

### Add wasm export stub in mod.ts

If you add export method in assembly/index.ts, please add stub method in mod.ts too, and stub methods are friendly to Deno TS App.

```typescript
export function welcome(name: string): string {
    return module.welcome(name);
}
```

### Refer the Wasm module in your Deno app

Push your code on Github, then use Deno PKG to refer mod.ts as following:

```typescript
import {add, welcome} from "https://denopkg.com/@github_user_name@/@moduleName@/mod.ts";

console.log(add(1, 2))
console.log(welcome("Jackie"))

```

# References

* AssemblyScript: https://www.assemblyscript.org/
* as-bind: https://github.com/torch2424/as-bind
