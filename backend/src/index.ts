import express from 'express';
import { postgraphile } from 'postgraphile';

const app = express();

app.use(
  postgraphile(
    "postgres://postgres:postgres@localhost:5432/tekne",
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      retryOnInitFail: true,
    }
  )
);

app.get('/', (req, res) => {
  res.send('OK');
});

app.listen(5000, () => {
  console.log('channel open');
});
