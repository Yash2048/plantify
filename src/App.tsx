/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import '../global.css';
import {View, Text, StyleSheet} from 'react-native';
import React, {StrictMode} from 'react';
import Footer from './components/Footer';
import {LoadingProvider} from './Context/LoadingContext';

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
      <View className="flex-1 justify-end">
        <Footer />
      </View>
    </Providers>
  );
}
