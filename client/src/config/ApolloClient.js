import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { GRAPHQL_URL } from './environment';

const baseLink = new HttpLink({
  uri: GRAPHQL_URL,
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors && process.env.NODE_ENV !== 'production') {
    graphQLErrors.forEach(({ message }) => console.error(message));
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, baseLink]),
  cache: new InMemoryCache(),
});

export default client;
