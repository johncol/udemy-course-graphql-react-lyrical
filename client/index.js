import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const link = new HttpLink('http://localhost:4000/');
const cache = new InMemoryCache();
const client = new ApolloClient({ link, cache });

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <h1>hello</h1>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
