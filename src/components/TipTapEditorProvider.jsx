import { EditorProvider } from '@tiptap/react';
import MenuBar from './MenuBar';
import { content, extensions } from './TipTap';

const TipTapEditorProvider = () => {
    return (
        <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}></EditorProvider>
    );
};

export default TipTapEditorProvider;