# react-file-viewer

A zero-config, read-only code viewer React component powered by [Monaco Editor](https://microsoft.github.io/monaco-editor/) (the VS Code editor engine).

**No webpack / vite / bundler configuration needed.** Works out of the box with Vite, Next.js, Create React App, or any React setup.

---

## Installation

Install directly from GitHub — no npm account needed:

```bash
# Latest from main branch
npm install github:YOUR_USERNAME/react-file-viewer

# Pin to a specific release tag (recommended)
npm install github:YOUR_USERNAME/react-file-viewer#v1.0.0
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
ABAP, APEX, BAT, C, CPP, CSHARP, CSS, DART, DOCKERFILE, ELIXIR,
FSHARP, GO, GRAPHQL, HTML, JAVA, JAVASCRIPT, JSON, KOTLIN, LUA,
MARKDOWN, MYSQL, PHP, POWERSHELL, PYTHON, R, RUBY, RUST, SCALA,
SCSS, SHELL, SQL, SWIFT, TYPESCRIPT, XML, YAML, ...
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
git clone https://github.com/YOUR_USERNAME/react-file-viewer
cd react-file-viewer
npm install
npm run build   # outputs to dist/
```

---

## License

MIT
