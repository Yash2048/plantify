/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import '../global.css';
import React, {StrictMode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import PlantDetails from './screens/PlantDetails';
import {DataProvider} from './Context/DataContext';

function Providers({children}: {children: React.ReactNode}) {
  return (
    <StrictMode>
      <DataProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </DataProvider>
    </StrictMode>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Providers>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={PlantDetails} />
      </Stack.Navigator>
    </Providers>
  );
}
