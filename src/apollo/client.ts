import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { authToken } from '../libs/token';

const httpLink = createHttpLink({
  uri: 'https://localhost:4000/',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await authToken.get();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
