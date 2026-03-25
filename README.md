# react-file-viewer

A zero-config, read-only code viewer React component powered by [Monaco Editor](https://microsoft.github.io/monaco-editor/) (the VS Code editor engine).

**No webpack / vite / bundler configuration needed.** Works out of the box with Vite, Next.js, Create React App, or any React setup.

---

## Installation

```bash
# Latest from main branch
npm install github:shanedonnelly/react-file-viewer
```

---

## Usage

### JavaScript / JSX

```jsx
import FileViewer, { FileType } from "react-file-viewer";

export default function App() {
  return (
    <FileViewer
      text={`const hello = "world";`}
      file_type={FileType.JAVASCRIPT}
      dark_mode={true}
      height={300}
    />
  );
}
```

### TypeScript / TSX

```tsx
import FileViewer, { FileType, FileViewerProps } from "react-file-viewer";

const code = `def hello():
    print("world")`;

export default function App() {
  return (
    <FileViewer
      text={code}
      file_type={FileType.PYTHON}
      dark_mode={false}
      height={200}
    />
  );
}
```

---

## Props

| Prop        | Type            | Default          | Description                                      |
|-------------|-----------------|------------------|--------------------------------------------------|
| `text`      | `string`        | `""`             | The code/text content to display                 |
| `file_type` | `FileTypeValue` | `FileType.OTHER` | Language for syntax highlighting                 |
| `dark_mode` | `boolean`       | `false`          | Use VS Code dark theme                           |
| `height`    | `number`        | `400`            | Editor height in pixels                          |

---

## Supported languages

All Monaco Editor languages are supported via the `FileType` enum:

```
Here is the source code for the `FileType` enum, which includes all supported languages:

```tsx
export const FileType = {
  ABAP: "abap",
  APEX: "apex",
  AZCLI: "azcli",
  BAT: "bat",
  BICEP: "bicep",
  CAMELIGO: "cameligo",
  CLOJURE: "clojure",
  COFFEESCRIPT: "coffeescript",
  C: "c",
  CPP: "cpp",
  CSHARP: "csharp",
  CSP: "csp",
  CSS: "css",
  CYPHER: "cypher",
  DART: "dart",
  DOCKERFILE: "dockerfile",
  ECL: "ecl",
  ELIXIR: "elixir",
  FLOW9: "flow9",
  FSHARP: "fsharp",
  FREEMARKER2: "freemarker2",
  GO: "go",
  GRAPHQL: "graphql",
  HANDLEBARS: "handlebars",
  HCL: "hcl",
  HTML: "html",
  INI: "ini",
  JAVA: "java",
  JAVASCRIPT: "javascript",
  JULIA: "julia",
  KOTLIN: "kotlin",
  LESS: "less",
  LEXON: "lexon",
  LIQUID: "liquid",
  LUA: "lua",
  M3: "m3",
  MARKDOWN: "markdown",
  MIPS: "mips",
  MSDAX: "msdax",
  MYSQL: "mysql",
  OBJECTIVE_C: "objective-c",
  PASCAL: "pascal",
  PASCALIGO: "pascaligo",
  PERL: "perl",
  PGSQL: "pgsql",
  PHP: "php",
  PLA: "pla",
  POSTIATS: "postiats",
  POWERQUERY: "powerquery",
  POWERSHELL: "powershell",
  PROTO: "proto",
  PUG: "pug",
  PYTHON: "python",
  QSHARP: "qsharp",
  R: "r",
  RAZOR: "razor",
  REDIS: "redis",
  REDSHIFT: "redshift",
  RESTRUCTUREDTEXT: "restructuredtext",
  RUBY: "ruby",
  RUST: "rust",
  SCALA: "scala",
  SCHEME: "scheme",
  SCSS: "scss",
  SHELL: "shell",
  SOL: "sol",
  AES: "aes",
  SPARQL: "sparql",
  SQL: "sql",
  ST: "st",
  SWIFT: "swift",
  SYSTEMVERILOG: "systemverilog",
  TCL: "tcl",
  TWIG: "twig",
  TYPESPEC: "typespec",
  TYPESCRIPT: "typescript",
  VB: "vb",
  WGSL: "wgsl",
  XML: "xml",
  YAML: "yaml",
  JSON: "json",
  OTHER: "markdown", // Monaco doesn't support a generic "text" mode, so we use markdown for other files
} as const;

```

When `file_type` is `FileType.OTHER`, a plain `<code>` block is rendered (no Monaco dependency loaded).

---

## Framework compatibility

| Framework              | Works? | Notes                        |
|------------------------|--------|------------------------------|
| Vite                   | ✅     | Zero config                  |
| Next.js (App Router)   | ✅     | Use `"use client"` directive |
| Next.js (Pages Router) | ✅     | Zero config                  |
| Create React App       | ✅     | Zero config                  |
| Remix                  | ✅     | Zero config                  |

### Next.js App Router note

Since Monaco uses browser APIs, wrap your component with `"use client"`:

```tsx
"use client";
import FileViewer, { FileType } from "react-file-viewer";
```

---

## Build from source

```bash
git clone https://github.com/shanedonnelly/react-file-viewer
cd react-file-viewer
npm install
npm run build   # outputs to dist/
```

---

## License

MIT
