import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";

// ---------------------------------------------------------------------------
// CSS injection (read-only cursor fix) — runs once in the browser
// ---------------------------------------------------------------------------

let _cssInjected = false;
function injectReadOnlyCss() {
  if (_cssInjected || typeof document === "undefined") return;
  _cssInjected = true;
  const style = document.createElement("style");
  style.textContent = `
    .file-viewer-readonly .monaco-editor .view-lines {
      cursor: text !important;
    }
    .file-viewer-readonly .monaco-editor .cursors-layer .cursor {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
}

// ---------------------------------------------------------------------------
// FileType enum
// ---------------------------------------------------------------------------

/**
 * All languages supported by Monaco Editor, plus `"other"`.
 * When `file_type` is `FileType.OTHER`, a plain `<code>` block is rendered.
 */
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

export type FileTypeValue = (typeof FileType)[keyof typeof FileType];


// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface FileViewerProps {
  /** The text content to display. */
  text?: string;
  /** Language for syntax highlighting. Use `FileType` enum values. Default: `FileType.OTHER`. */
  file_type?: FileTypeValue;
  /** Use dark theme. Default: `false`. */
  dark_mode?: boolean;
  /** Editor height in pixels. Default: `400`. */
  height?: number;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * `FileViewer` — a zero-config, read-only code viewer.
 *
 * Powered by `@monaco-editor/react` — no webpack/vite config needed.
 *
 * @example
 * ```tsx
 * import FileViewer, { FileType } from "react-file-viewer";
 *
 * <FileViewer
 *   text={myCode}
 *   file_type={FileType.PYTHON}
 *   dark_mode
 *   height={500}
 * />
 * ```
 */
export default function FileViewer({
  text = "",
  file_type = FileType.OTHER,
  dark_mode = false,
  height = 400,
}: FileViewerProps) {
  useEffect(() => {
    injectReadOnlyCss();
  }, []);

  return (
    <div className="file-viewer-readonly" style={{ width: "100%" }}>
      <Editor
        width="100%"
        height={height}
        language={file_type}
        value={text}
        theme={dark_mode ? "vs-dark" : "vs"}
        options={{
          readOnly: true,
          domReadOnly: true,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          renderLineHighlight: "none",
          contextmenu: false,
          folding: false,
          lineNumbersMinChars: 3,
        }}
      />
    </div>
  );
}
