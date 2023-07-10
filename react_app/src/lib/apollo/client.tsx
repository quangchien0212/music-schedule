import { ApolloClient, InMemoryCache } from "@apollo/client";

function createClient() {
  const client = new ApolloClient({
    uri: "https://localhost:3000/graphql",
    cache: new InMemoryCache(),
  });

  return client
}

export default createClient