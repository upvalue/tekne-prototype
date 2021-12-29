import React from 'react'
import { useAllNotesQuery } from './api/client'
import { createClient, dedupExchange, errorExchange, fetchExchange, Provider as UrqlProvider } from 'urql';
import { BrowserRouter } from 'react-router-dom'
import { Badge, ChakraProvider, HStack } from '@chakra-ui/react'
import { Editor } from './editor/Editor';

// Edit a single entry at a time with auto save

// Add an entry with a button
// Search through entries
// Tags with autocomplete


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
        <Editor key={note.noteId} noteId={note.noteId} body={JSON.parse(note.body)} />
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