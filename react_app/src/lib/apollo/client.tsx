import { ApolloClient, ApolloLink, createHttpLink, from, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { HOST } from '~/constants/path';

const detectLogout = new ApolloLink((operation, forward) => {
  return forward(operation).map((data) => {
    data?.errors?.map(e => {
      if (e.message === 'login-required') {
        window.location.href = `${HOST}/login`
      }
    })
    return data;
  })
})

const httpLink = createHttpLink({
  uri: "https://localhost:3000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const links = from([authLink, detectLogout, httpLink])

function createClient() {
  const client = new ApolloClient({
    link: links,
    cache: new InMemoryCache(),
  });

  return client
}

export default createClient