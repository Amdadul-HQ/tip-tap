import { EditorProvider } from "@tiptap/react";
import { content, extensions, MenuBar } from "./MenuBar";
import './MenuBar.css'
const TiptapEditor = () => {
  return(
<EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}></EditorProvider>
  )
};

export default TiptapEditor;
