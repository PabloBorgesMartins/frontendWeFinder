import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

import AppProvider from './src/hooks'

export default function App() {
  /*
  const [fontsLoaded] = useFonts({
    MavenPro-bold,
  });
translucent
  if (!fontsLoaded) {
    return <AppLoading />;
  }*/

  return (
    <NavigationContainer>
      <AppProvider>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" hidden />
        <Routes />
      </AppProvider>
    </NavigationContainer>

  );
}
