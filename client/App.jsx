import React from 'react';
import { ApolloProvider } from '@apollo/client';
import ApolloClient from './src/config/ApolloClient';

import MainStack from './src/navigation/MainStack';

const App = () => {
  return (
    <ApolloProvider client={ApolloClient}>
      <MainStack />
    </ApolloProvider>
  );
};

export default App;
