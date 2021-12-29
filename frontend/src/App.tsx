import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import { createClient, dedupExchange, errorExchange, fetchExchange, Provider as UrqlProvider } from 'urql';
import { BrowserRouter } from 'react-router-dom'
import { Note, useAllNotesQuery, useUpdateNoteMutation } from './api/client'
import { Badge, ChakraProvider, HStack } from '@chakra-ui/react'
import { useTimer } from './hooks/useTimer'

// Add an entry with a button
// Edit a single entry at a time with auto save
// Search through entries
// Tags with autocomplete


const Entry = ({ noteId, body }: { noteId: string, body: string }) => {
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
      updateNote({
        noteId,
        body: JSON.stringify(editor.getJSON()),
      });
    }
  }, [editor]);

  return (
    <EditorContent editor={editor} />
  )

}

const urqlClient = createClient({
  // TODO: Make this build-time configurable
  url: 'http://localhost:3000/graphql',
  requestPolicy: 'network-only',
  // Disable caching
  exchanges: [
    dedupExchange,
    errorExchange({
      onError: (error, _operation) => {
        console.error(error);
      }
    }),
    fetchExchange,
  ]
});


export const Main = () => {
  const [{ fetching, data }] = useAllNotesQuery();

  if (fetching || !data) {
    return <>Loading...</>;
  }

  return <div className="entries">
    {data.allNotes?.nodes.map(note => (
      note && <React.Fragment key={note.noteId}>
        <HStack>
          <Badge>{note.noteId}</Badge>
          <Badge>Created: {note.createdAt}</Badge>
        </HStack>
        <Entry key={note.noteId} noteId={note.noteId} body={JSON.parse(note.body)} />
      </React.Fragment>
    ))}
  </div>;
}


export const App = () => {
  return (
    <UrqlProvider value={urqlClient}>
      <ChakraProvider>
        <BrowserRouter>
          <div className="container">
            <Main />
          </div>
        </BrowserRouter>
      </ChakraProvider>
    </UrqlProvider>
  )
}