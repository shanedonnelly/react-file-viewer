"use client";
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