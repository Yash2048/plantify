/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import '../global.css';
import React, {StrictMode} from 'react';
import {LoadingProvider} from './Context/LoadingContext';
import Home from './screens/Home';

function Providers({children}: {children: React.ReactNode}) {
  return (
    <StrictMode>
      <LoadingProvider>{children}</LoadingProvider>
    </StrictMode>
  );
}

export default function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}
