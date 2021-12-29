import express from 'express';
import morgan from 'morgan';
import { postgraphile } from 'postgraphile';
import { makeExtendSchemaPlugin, gql } from 'graphile-utils';

const app = express();

app.use(morgan('combined'));

const additionalResolvers = makeExtendSchemaPlugin(_ => {
  return {
    typeDefs: gql`
      type UpdateNoteReturn {
        noteId: String!
      }
      extend type Query {
        ping: String!
      }

      extend type Mutation {
        updateNotePlus(noteId: String!, body: String!): UpdateNoteReturn!
      }
    `,
    resolvers: {
      Query: {
        ping: async (_query, _args, _context, _resolveInfo) => {
          return 'pong';
        }
      },
      Mutation: {
        updateNotePlus: async (_query, args: { noteId: string, body: string }, context, _resolveInfo) => {
          // TODO: Properly type arguments
          const { body, noteId } = args;
          const { rows } = await context.pgClient.query(
            'UPDATE notes SET body = $1 WHERE note_id = $2',
            [body, noteId],
          );
          // TOOD: Handle errors here? Doesn't seem to care about being passed a nonsense noteId
          return {
            noteId,
          }
        }
      }
    }
  }
})


app.use(
  postgraphile(
    "postgres://postgres:postgres@localhost:5432/tekne",
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      retryOnInitFail: true,
      appendPlugins: [additionalResolvers],
    }
  )
);

app.get('/', (req, res) => {
  res.send('OK');
});

app.listen(5000, () => {
  console.log('channel open');
});
