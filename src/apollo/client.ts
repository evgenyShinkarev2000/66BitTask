import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_GRAPHQL_URI,
});

const wsLink = new GraphQLWsLink(createClient({
  url: import.meta.env.VITE_API_GRAPHQL__WS_URI,
}));

const splitLink = split(({ query }) =>
{
  const definition = getMainDefinition(query);

  return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  );
},
  wsLink,
  httpLink,
);

export const appoloClient = new ApolloClient({
  cache: new InMemoryCache({
  }),
  connectToDevTools: true,
  link: splitLink,
});