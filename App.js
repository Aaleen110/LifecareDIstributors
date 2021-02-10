
import React from 'react';
import {

  StyleSheet,

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/scenes/splash.screen';
import AppNavigator from './src/scenes/router';


const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
});

export default App;
