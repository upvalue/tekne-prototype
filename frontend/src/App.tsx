import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import { createClient, dedupExchange, errorExchange, fetchExchange, Provider as UrqlProvider } from 'urql';
import { BrowserRouter } from 'react-router-dom'
import { useAllNotesQuery } from './api/client'

// GraphQL client
// Load all existing entries
// Edit a single entry at a time
// Save entry with a button

const Entry = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
    ],
    content: `
    <p>
      basic editor test.
    </p>
    `,
  })

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

  if (fetching) {
    return <>Loading...</>;
  }
  console.log(data);
  return (
    <Entry />
  )
}


export const App = () => {
  return (
    <UrqlProvider value={urqlClient}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </UrqlProvider>
  )
}