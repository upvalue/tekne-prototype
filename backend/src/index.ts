import express from 'express';
import morgan from 'morgan';
import { postgraphile } from 'postgraphile';
import { makeExtendSchemaPlugin, gql } from 'graphile-utils';

const app = express();

app.use(morgan('combined'));

const additionalResolvers = makeExtendSchemaPlugin(_ => {
  return {
    typeDefs: gql`
      extend type Query {
        ping: String!
      }
    `,
    resolvers: {
      Query: {
        ping: async (_query, args, context, resolveInfo) => {
          return 'pong';
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
