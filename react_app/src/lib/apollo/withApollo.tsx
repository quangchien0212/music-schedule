import React from 'react'
import createClient from "./client";
import { ApolloProvider } from '@apollo/client';

function withApollo<T = any>(Component: React.ElementType) {
  return (props: T) => (
    <ApolloProvider client={createClient()}>
      <Component {...props} />
    </ApolloProvider>
  )
}

export default withApollo