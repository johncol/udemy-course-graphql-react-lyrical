const app = require('./server/server');

app.listen(4000, () => {
  console.log(`
  ------------------------------------------------------------------------------------------
    Server started on http://localhost:4000
    GraphiQL on http://localhost:4000/graphql
  ------------------------------------------------------------------------------------------
  `);
});
