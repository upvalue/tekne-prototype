import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import { Note, useAllNotesQuery, useUpdateNoteMutation } from '../api/client'
import { useTimer } from '../hooks/useTimer'

export const Editor = ({ noteId, body }: { noteId: string, body: string }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
    ],
    content: body,
  });

  const [updateNoteResult, updateNote] = useUpdateNoteMutation();

  useTimer(noteId, () => {
    if (editor) {
      console.log('[autosave]')
      /*updateNote({
        noteId,
        body: JSON.stringify(editor.getJSON()),
      });*/
    }
  }, [editor]);

  return (
    <EditorContent editor={editor} />
  )

}